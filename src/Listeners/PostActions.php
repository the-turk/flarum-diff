<?php
namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Models\Diff;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Saving as PostSaving;
use Flarum\Post\Event\Revised as PostRevised;
use Flarum\Extension\ExtensionManager;
use TheTurk\Diff\Jobs\ArchiveDiffs;
use Carbon\Carbon;
use Flarum\Post\Post;
use Flarum\User\User;

class PostActions
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var ExtensionManager
     */
    private $extensions;

    /**
     * @var ArchiveDiffs
     */
    protected $job;

    /**
     * @var string $oldContent
     */
    private $oldContent = '';

    /**
     * @param SettingsRepositoryInterface $settings
     * @param ExtensionManager $extensions
     * @param ArchiveDiffs $job
     */
    public function __construct(
      SettingsRepositoryInterface $settings,
      ExtensionManager $extensions,
      ArchiveDiffs $job
    )
    {
        $this->settings = $settings;
        $this->extensions = $extensions;
        $this->job = $job;
    }

    /**
     * Subscribes to the Flarum events
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostSaving::class, [$this, 'whenSavingPost']);
        $events->listen(
          ($this->extensions->isEnabled('the-turk-quiet-edits')
          ? \TheTurk\QuietEdits\Events\PostWasRevisedLoudly::class
          : PostRevised::class),
          [$this, 'whenRevisedPost']
        );
    }

    /**
     * Catch the content of the old post
     * just before saving the new one
     *
     * @param PostSaving $event
     */
    public function whenSavingPost(PostSaving $event)
    {
        $post = $event->post;
        if ($post->exists)
          $this->oldContent = $post->getContentAttribute(
            $post->getOriginal('content')
          );
    }

    public function whenRevisedPost($event)
    {
        $mainPostOnly = (bool)$this->settings->get(
            'the-turk-diff.mainPostOnly',
            false
        );

        if ($mainPostOnly) {
            if ($event->post->number != '1') return;
        }

        $archiveOlds = $this->settings->get(
            'the-turk-diff.archiveOlds',
            false
        );

        $useCrons = $this->settings->get(
            'the-turk-diff.useCrons',
            false
        );

        // check if this post has been edited before
        // and increase the revision number
        $latestRevModel = Diff::where('post_id', $event->post->id)->max('revision');
        $revision = ($latestRevModel ? $latestRevModel + 1 : 1);

        $diff = Diff::build(
            $revision,
            $event->post->id,
            $event->actor->id,
            $this->oldContent
        );

        $diff->created_at = Carbon::now();
        $diff->save();

        if($archiveOlds && !$useCrons) {
            $this->job->archiveForPost($event->post->id, $revision);
        }
    }
}
