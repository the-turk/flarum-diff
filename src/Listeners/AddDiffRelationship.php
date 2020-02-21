<?php
namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Renderer\Html\Inline as InlineRenderer;
use TheTurk\Diff\Renderer\Html\SideBySide as SideBySideRenderer;
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
use Flarum\Api\Serializer\ForumSerializer;
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
     * @throws \Jfcherng\Diff\Exception\UnsupportedFunctionException
     */
    public function prepareApiAttributes(Serializing $event)
    {
        $rendererChoice = (string)$this->settings->get($this->settingsPrefix.'renderMode', 'Inline');
        $allowSwitch = (bool)$this->settings->get(
            'the-turk-diff.allowSwitch',
            true
        );

        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['diffRenderer'] = $rendererChoice;
            $event->attributes['allowDiffSwitch'] = $allowSwitch;
            $event->attributes['enableDiffSyncScroll'] = (bool)
                $this->settings->get(
                    'the-turk-diff.enableSyncScroll',
                    true
                );
        }

        if ($event->isSerializer(PostSerializer::class)) {
            $event->attributes['canViewEditHistory'] = (bool)
                $event->actor->can('viewEditHistory');

            $latestRevModel = Diff::where('post_id', $event->model->id)->latest()->first();
            $revision = ($latestRevModel ? $latestRevModel->revision : 0);
            $event->attributes['revisionCount'] = $revision;
        }

        if ($event->isSerializer(DiffSerializer::class)) {
            $eventActor = $event->actor;
            $isSelf = $eventActor->id === $event->model->actor->id;
            $event->attributes['canDeleteEditHistory'] =
                ($eventActor->can('deleteEditHistory')
                    || ($isSelf && $eventActor->can('selfDeleteEditHistory')));

            $diffArray = json_decode($event->model->diff, true);
            $detailLevel = $this->settings->get(
                'the-turk-diff.detailLevel',
                'line'
            );

            if (!is_null($diffArray)) {
                $isTabular = $this->settings->get(
                    'the-turk-diff.displayMode',
                    'customHTML'
                ) === 'tabularHTML';

                $rendererOptions = [
                    'separateBlock' => (bool)$this->settings->get(
                        'the-turk-diff.separateBlock',
                        true
                    ),
                    'lineNumbers' => $isTabular,
                    'wrapperClasses' => $isTabular ? ['TabularDiff'] : ['CustomDiff']
                    // context option won't work for this renderer
                    // since we already defined it in the JSON renderer
                    // just before saving diff's to database
                ];

                if ($allowSwitch || $rendererChoice === 'Inline') {
                    $inlineRenderer = new InlineRenderer($rendererOptions);
                    $inlineRenderer->setDetailLevel($detailLevel);
                    $inlineRenderer->setTranslationKeys([
                        'differences' => $this->translator->trans('the-turk-diff.forum.differences'),
                    ]);

                    $inlineHtml = $inlineRenderer->renderArray($diffArray);
                    $event->attributes['inlineHtml'] = $inlineHtml;
                }

                if ($allowSwitch || $rendererChoice === 'SideBySide') {
                    $sideBySideRenderer = new SideBySideRenderer($rendererOptions);
                    $sideBySideRenderer->setDetailLevel($detailLevel);
                    $sideBySideRenderer->setTranslationKeys([
                        'differences' => $this->translator->trans('the-turk-diff.forum.differences'),
                    ]);

                    $sideBySideHtml = $sideBySideRenderer->renderArray($diffArray);
                    $event->attributes['sideBySideHtml'] = $sideBySideHtml;
                }
            }
        }
    }
}
