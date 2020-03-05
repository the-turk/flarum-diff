<?php
namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Renderers\Html\Inline as InlineRenderer;
use TheTurk\Diff\Renderers\Html\SideBySide as SideBySideRenderer;
use TheTurk\Diff\Renderers\Html\Combined as CombinedRenderer;
use Flarum\Post\Post;
use Jfcherng\Diff\Differ;
use Flarum\Event\GetModelRelationship;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Translation\Translator;
use TheTurk\Diff\Api\Serializers\DiffSerializer;
use TheTurk\Diff\Models\Diff;
use TheTurk\Diff\Repositories\DiffArchiveRepository;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class AddDiffRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @var string $settingsPrefix
     */
    public $settingsPrefix = 'the-turk-diff.';

    /**
     * @var Translator
     */
    protected $translator;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param Translator $translator
     * @param DiffArchiveRepository $diffArchive
     */
    public function __construct(
        SettingsRepositoryInterface $settings,
        Translator $translator,
        DiffArchiveRepository $diffArchive
    ) {
        $this->settings = $settings;
        $this->translator = $translator;
        $this->diffArchive = $diffArchive;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetModelRelationship::class, [$this, 'getModelRelationship']);
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     *  One post has many diff.
     *
     * @param GetModelRelationship $event
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany|null
     */
    public function getModelRelationship(GetModelRelationship $event)
    {
        if ($event->isRelationship(Post::class, 'diff')) {
            return $event->model->hasMany(Diff::class, 'post_id');
        }
    }

    /**
     * @param GetApiRelationship $event
     *
     * @return \Tobscure\JsonApi\Relationship|null
     */
    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(BasicPostSerializer::class, 'diff')) {
            return $event->serializer->hasMany($event->model, DiffSerializer::class, 'diff');
        }
    }

    /**
     * @param Serializing $event
     * @throws \Jfcherng\Diff\Exception\UnsupportedFunctionException
     */
    public function prepareApiAttributes(Serializing $event)
    {
        $rendererChoice = (string)$this->settings->get($this->settingsPrefix.'renderMode', 'Inline');
        $allowSwitch = (bool)$this->settings->get(
            $this->settingsPrefix.'allowSwitch',
            true
        );

        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['diffRenderer'] = $rendererChoice;
            $event->attributes['allowDiffSwitch'] = $allowSwitch;
            $event->attributes['enableDiffSyncScroll'] = (bool)
                $this->settings->get(
                    $this->settingsPrefix.'enableSyncScroll',
                    true
                );
        }

        if ($event->isSerializer(PostSerializer::class)) {
            $event->attributes['canViewEditHistory'] = (bool)
                $event->actor->can('viewEditHistory');

            $latestRevModel = Diff::where('post_id', $event->model->id)->max('revision');
            $revisionCount = ($latestRevModel ? $latestRevModel : 0);
            $event->attributes['revisionCount'] = $revisionCount;
        }

        if ($event->isSerializer(DiffSerializer::class)) {
            $event->attributes += [
                'canDeleteEditHistory' => false,
                'isRevertable' => false,
                'inlineHtml' => null,
                'sideBySideHtml' => null,
                'combinedHtml' => null
            ];

            if(null === $event->model->deleted_at) {
                $oldContent = '';
                $newContent = '';

                $eventActor = $event->actor;
                $isSelf = $eventActor->id === $event->model->actor->id;
                $event->attributes['canDeleteEditHistory'] =
                    ($eventActor->can('deleteEditHistory')
                        || ($isSelf && $eventActor->can('selfDeleteEditHistory')));

                if ($event->model->archived) {
                    $oldContent = $this->diffArchive->getArchivedContent(
                        $event->model->post_id,
                        $event->model->id
                    );
                } else {
                    $oldContent = $event->model->content;
                }

                $nextDiff = Diff::where('revision', '>', $event->model->revision)
                  ->where('post_id', $event->model->post_id)
                  ->where('deleted_at', null)->first();

                $isRevertable = null !== $nextDiff ? true : false;
                $event->attributes['isRevertable'] = $isRevertable;

                if ($isRevertable) {
                    if ($nextDiff->archived) {
                        $newContent = $this->diffArchive->getArchivedContent(
                            $event->model->post_id,
                            $nextDiff->id
                        );
                    } else {
                      $newContent = $nextDiff->content;
                    }
                } else {
                    $newContent = Post::findOrFail($event->model->post_id)->content;
                }

                $differ = new Differ(
                    explode("\n", $oldContent),
                    explode("\n", $newContent),
                    [
                        'context' => (int)
                            $this->settings->get($this->settingsPrefix.'neighborLines', 2),
                        'ignoreCase' => (bool)
                            $this->settings->get('the-turk-quiet-edits.ignoreCase', false),
                        'ignoreWhitespace' => (bool)
                            $this->settings->get('the-turk-quiet-edits.ignoreWhitespace', false),
                    ]
                );

                $isTabular = $this->settings->get(
                    $this->settingsPrefix.'displayMode',
                    'customHTML'
                ) === 'tabularHTML';

                $rendererOptions = [
                    'detailLevel' => $this->settings->get(
                        $this->settingsPrefix.'detailLevel',
                        'line'
                    ),
                    'separateBlock' => (bool)$this->settings->get(
                        $this->settingsPrefix.'separateBlock',
                        true
                    ),
                    'lineNumbers' => $isTabular,
                    'wrapperClasses' => $isTabular ? ['TabularDiff'] : ['CustomDiff']
                ];

                if ($allowSwitch || $rendererChoice === 'Inline') {
                    $inlineRenderer = new InlineRenderer($rendererOptions);
                    $inlineRenderer->setTranslationKeys([
                        'differences' => $this->translator->trans('the-turk-diff.forum.differences'),
                    ]);

                    $inlineHtml = $inlineRenderer->render($differ);
                    $event->attributes['inlineHtml'] = $inlineHtml;
                }

                if ($allowSwitch || $rendererChoice === 'SideBySide') {
                    $sideBySideRenderer = new SideBySideRenderer($rendererOptions);
                    $sideBySideRenderer->setTranslationKeys([
                        'differences' => $this->translator->trans('the-turk-diff.forum.differences'),
                    ]);

                    $sideBySideHtml = $sideBySideRenderer->render($differ);
                    $event->attributes['sideBySideHtml'] = $sideBySideHtml;
                }

                if ($allowSwitch || $rendererChoice === 'Combined') {
                    $combinedRenderer = new CombinedRenderer($rendererOptions);
                    $combinedRenderer->setTranslationKeys([
                        'differences' => $this->translator->trans('the-turk-diff.forum.differences'),
                    ]);

                    $combinedHtml = $combinedRenderer->render($differ);
                    $event->attributes['combinedHtml'] = $combinedHtml;
                }
            }
        }
    }
}
