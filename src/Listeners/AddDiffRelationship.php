<?php
namespace TheTurk\Diff\Listeners;

require(dirname(__DIR__) . '../../resources/assets/vendor/autoload.php');

use Jfcherng\Diff\Factory\RendererFactory;
use Flarum\Post\Post;
use Flarum\Event\GetModelRelationship;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Translation\Translator;
use TheTurk\Diff\Api\Serializers\DiffSerializer;
use TheTurk\Diff\Diff;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Settings\SettingsRepositoryInterface;

class AddDiffRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

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
     */
    public function __construct(
        SettingsRepositoryInterface $settings,
        Translator $translator
    ) {
        $this->settings = $settings;
        $this->translator = $translator;
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
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(PostSerializer::class)) {
            $event->attributes['canViewEditHistory'] = (bool)
                $event->actor->can('discussion.viewEditHistory');

            $latestRevModel = Diff::where('post_id', $event->model->id)->latest()->first();
            $revision = ($latestRevModel ? $latestRevModel->revision : 0);
            $event->attributes['revisionCount'] = (int)$revision;
        }

        if ($event->isSerializer(DiffSerializer::class)) {
            $diffArray = json_decode($event->model->diff, true);
            if (!is_null($diffArray)) {
                $renderer = RendererFactory::make(
                    (string)$this->settings->get($this->settingsPrefix.'renderMode', 'Inline'),
                    [
                        'separateBlock' => (bool)$this->settings->get(
                            'the-turk-diff.seperateBlock',
                            true
                        ),
                        'spacesToNbsp' => true,
                        'lineNumbers' => $this->settings->get(
                            'the-turk-diff.displayMode',
                            'customHTML'
                        ) === 'tabularHTML'
                        // context option won't work for this renderer
                        // since we already defined it in the JSON renderer
                        // just before saving diff's to database
                    ]
                );
                // this looks a bit dirty but can't see
                // another reasonable way of doing this so...
                $contentHtml = $renderer->renderArray($diffArray);
                $contentHtml = $this->str_replace_first(
                    ['Old', 'New', 'Differences'],
                    [
                        $this->translator->trans('the-turk-diff.forum.oldVersion'),
                        $this->translator->trans('the-turk-diff.forum.newVersion'),
                        $this->translator->trans('the-turk-diff.forum.differences')
                    ],
                    $contentHtml
                );

                $event->attributes['contentHtml'] = $contentHtml;
                $event->attributes['largeModal'] = (bool)
                    ($this->settings->get(
                        $this->settingsPrefix.'displayMode', 'customHTML'
                        ) === 'tabularHTML') &&
                        ($this->settings->get(
                            $this->settingsPrefix.'renderMode', 'Inline'
                            ) === 'SideBySide');
            }
        }
    }

    /**
     * Function to localize table headings.
     *
     * @param array $search
     * @param array $replace
     * @param array $subject
     * @return string
     */
    public function str_replace_first(
        array $search,
        array $replace,
        string $subject
    ) {
        if (count($search) === count($replace)) {
            foreach ($search as $k => $s) {
                $pos = strpos($subject, $s);
                if ($pos !== false && array_key_exists($k, $replace)) {
                    $subject = substr_replace(
                        $subject,
                        $replace[$k],
                        $pos,
                        strlen($s)
                    );
                }
            }
        }

        return $subject;
    }
}
