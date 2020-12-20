<?php

namespace IanM\Diff\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extension\ExtensionManager;
use Flarum\Post\CommentPost;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Translation\Translator;
use Jfcherng\Diff\Differ;
use Jfcherng\Diff\Factory\RendererFactory;
use IanM\Diff\Api\Serializers\DiffSerializer;
use IanM\Diff\Models\Diff;
use IanM\Diff\Repositories\DiffArchiveRepository;

class AddDiffRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var CommentPost
     */
    protected $commentPost;

    /**
     * @var ExtensionManager
     */
    protected $extensions;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @var string
     */
    public $settingsPrefix = 'the-turk-diff.';

    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param CommentPost                 $commentPost
     * @param ExtensionManager            $extensions
     * @param Translator                  $translator
     * @param DiffArchiveRepository       $diffArchive
     */
    public function __construct(
        SettingsRepositoryInterface $settings,
        CommentPost $commentPost,
        ExtensionManager $extensions,
        Translator $translator,
        DiffArchiveRepository $diffArchive
    ) {
        $this->settings = $settings;
        $this->commentPost = $commentPost;
        $this->extensions = $extensions;
        $this->translator = $translator;
        $this->diffArchive = $diffArchive;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param Serializing $event
     *
     * @throws \Jfcherng\Diff\Exception\UnsupportedFunctionException
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(PostSerializer::class)) {
            $isSelf = $event->actor->id === $event->model->user_id;

            // integration with kvothe/reply-to-see extension
            $replied = true;

            if ($this->extensions->isEnabled('kvothe-reply-to-see')) {
                $users = [];
                $usersModel = $event->model['discussion']->participants()->get('id');

                foreach ($usersModel as $user) {
                    $users[] = $user->id;
                }

                $replied = !$event->actor->isGuest() && in_array($event->actor->id, $users);
            }

            // set permission attributes
            $event->attributes['canViewEditHistory'] =
                $event->actor->can('viewEditHistory') && $replied;

            $event->attributes['canDeleteEditHistory'] =
                ($event->actor->can('deleteEditHistory')
                    || ($isSelf && $event->actor->can('selfDeleteEditHistory')));

            $event->attributes['canRollbackEditHistory'] =
                ($event->actor->can('rollbackEditHistory')
                    || ($isSelf && $event->actor->can('selfRollbackEditHistory')));

            // get post's revision count
            $diffSubject = Diff::where('post_id', $event->model->id);
            $revisionCount = ($diffSubject->exists() ? $diffSubject->max('revision') : 0);

            $event->attributes['revisionCount'] = $revisionCount;
        }

        if ($event->isSerializer(DiffSerializer::class)) {
            // set initial values for attributes
            $event->attributes += [
                'canDeleteEditHistory' => false,
                'inlineHtml'           => null,
                'sideBySideHtml'       => null,
                'combinedHtml'         => null,
                'previewHtml'          => null,
                'comparisonBetween'    => null,
            ];

            // set attributes if revision is not deleted
            if (null === $event->model->deleted_at) {
                // get post's revision count
                $diffSubject = Diff::where('post_id', $event->model->post_id);
                $revisionCount = $diffSubject->max('revision');

                $currentRevision = $event->model->content;

                // get uncompressed revision content for comparison.
                if ($event->model->archive_id !== null) {
                    $currentRevision = $this->diffArchive->getArchivedContent(
                        $event->model->archive_id,
                        $event->model->id
                    );
                }

                // we'll compare this current (new) revision
                // with one of the (old) previous revisions.
                // this array is very useful to give informations about
                // comparisons to users.
                $comparisonArray = ['new' => [
                    'revision' => $event->model->revision,
                    'diffId'   => $event->model->id,
                ],
                ];

                // we don't know anything about are there any previous revisions
                // to compare with current revision yet.
                $oldRevision = '';

                // if this is a last revision then we'll compare it with current content.
                // it's a bit confusing but remember - revisions starts with 0 (original content)
                // last revision is actually the current content.
                if ($event->model->revision == $revisionCount && null === $currentRevision) {
                    $currentRevision = Post::findOrFail($event->model->post_id)->content;
                }

                // set html attribute for the preview mode.
                $event->attributes['previewHtml'] = $this->formatter($currentRevision);

                // find a revision to compare with current revision
                $compareWith = $diffSubject->where('revision', '<', $event->model->revision)
                  ->where('deleted_at', null)
                  ->orderBy('revision', 'DESC')->first();

                // if current revision is the zeroth (original content)
                // or there are nothing to compare with latest revision
                // then switch to preview mode.
                // remember that latest revision is the current content
                if ($event->model->revision == 0 ||
                    ($event->model->revision == $revisionCount && $compareWith === null)) {
                    // keep in mind that old and new will be equal in $comparisonArray
                    // if this condition happens.
                    $comparisonArray['old'] = [
                        'revision' => $event->model->revision,
                        'diffId'   => $event->model->id,
                    ];
                } else {
                    // if there are nothing to compare with,
                    // then compare current revision with the current content
                    // -1 indicates current content in $comparisonArray.
                    if ($compareWith === null) {
                        $oldRevision = Post::findOrFail($event->model->post_id)->content;
                        $comparisonArray['old'] = [
                            'revision' => -1,
                            'diffId'   => null,
                        ];
                    } else {
                        if ($compareWith->archive_id !== null) {
                            // get uncompressed revision content for comparison.
                            $oldRevision = $this->diffArchive->getArchivedContent(
                                $compareWith->archive_id,
                                $compareWith->id
                            );
                        } else {
                            $oldRevision = $compareWith->content;
                        }

                        $comparisonArray['old'] = [
                            'revision' => $compareWith->revision,
                            'diffId'   => $compareWith->id,
                        ];
                    }

                    $ignoreCase = $ignoreWhiteSpace = false;

                    // support for my 'the-turk/flarum-quiet-edits' extension
                    if ($this->extensions->isEnabled('the-turk-quiet-edits')) {
                        $ignoreCase = $this->settings->get('the-turk-quiet-edits.ignoreCase', true);
                        $ignoreWhiteSpace = $this->settings->get('the-turk-quiet-edits.ignoreWhitespace', true);
                    }

                    // calculate differences between revisions
                    // more options can be found at jfcherng's repo.
                    $differ = new Differ(
                        explode("\n", $oldRevision),
                        explode("\n", $currentRevision),
                        [
                            // how many neighbor lines do we want to show?
                            'context' => (int)
                                $this->settings->get($this->settingsPrefix.'neighborLines', 2),
                            // iGnoRe cAsE diFfErEnceS
                            'ignoreCase' => $ignoreCase,
                            // i g nore white spac e dif feren ces
                            'ignoreWhitespace' => $ignoreWhiteSpace,
                        ]
                    );

                    $rendererOptions = [
                        // line-level is the default level
                        'detailLevel' => $this->settings->get(
                            $this->settingsPrefix.'detailLevel',
                            'line'
                        ),
                        // show a separator between different diff hunks in HTML renderers
                        'separateBlock' => (bool) $this->settings->get(
                            $this->settingsPrefix.'separateBlock',
                            true
                        ),
                        'lineNumbers'    => false,
                        'wrapperClasses' => ['TheTurkDiff', 'CustomDiff', 'diff-wrapper'],
                        // shows when there are no differences found between revisions
                        'resultForIdenticals' => '<div class="noDiff"><p>'
                             .$this->translator->trans('the-turk-diff.forum.noDiff').
                          '</p></div>',
                        // this option is just for Combined renderer
                        'mergeThreshold' => \IanM\Diff\Jobs\ArchiveDiffs::sanitizeFloat($this->settings->get(
                            $this->settingsPrefix.'mergeThreshold',
                            0.8
                        )),
                    ];

                    $inlineRenderer = RendererFactory::make('Inline', $rendererOptions);
                    $inlineHtml = $inlineRenderer->render($differ);
                    $event->attributes['inlineHtml'] = $inlineHtml;

                    $sideBySideRenderer = RendererFactory::make('SideBySide', $rendererOptions);
                    $sideBySideHtml = $sideBySideRenderer->render($differ);
                    $event->attributes['sideBySideHtml'] = $sideBySideHtml;

                    $combinedRenderer = RendererFactory::make('Combined', $rendererOptions);
                    $combinedHtml = $combinedRenderer->render($differ);
                    $event->attributes['combinedHtml'] = $combinedHtml;
                }

                $event->attributes['comparisonBetween'] = json_encode($comparisonArray);
            }
        }
    }

    /*
     * Render & parse the preview content.
     * I had to do this trick because new instance of
     * TextFormatter means fresh configuration.
     * I don't want to lose Flarum's configuration.
     *
     * @param string $content
     * @return string
     */
    public function formatter(string $content)
    {
        if ($this->settings->get($this->settingsPrefix.'textFormatting', true)) {
            return $this->commentPost->getFormatter()->render(
                $this->commentPost->getFormatter()->parse(
                    $content,
                    $this->commentPost
                ),
                $this->commentPost
            );
        }

        return \htmlspecialchars($content, ENT_QUOTES, 'UTF-8');
    }
}
