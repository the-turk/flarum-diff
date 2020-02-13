<?php
namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Diff;
use Jfcherng\Diff\DiffHelper;
use Jfcherng\Diff\Factory\RendererFactory;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Post\Event\Saving as PostSaving;
use Flarum\Post\Event\Revised as PostRevised;
use Flarum\Post\PostRepository;
use Carbon\Carbon;

class PostActions
{
    /**
     * @var PostRepository
     */
    protected $posts;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var string $settingsPrefix
     */
    public $settingsPrefix = 'the-turk-diff.';

    /**
     * @var string $oldContent
     */
    private $oldContent;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param PostRepository $posts
     */
    public function __construct(SettingsRepositoryInterface $settings, PostRepository $posts)
    {
        $this->settings = $settings;
        $this->posts = $posts;
    }

    /**
     * Subscribes to the Flarum events
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostSaving::class, [$this, 'whenSavingPost']);
        $events->listen(PostRevised::class, [$this, 'whenRevisedPost']);
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

        // if it exists it means that
        // user is editing this post
        if ($post->exists) {
            $oldPost = $this->posts->findOrFail($post->id);
            $this->oldContent = $oldPost->content;
        }
    }

    public function whenRevisedPost(PostRevised $event)
    {
        $post = $event->post;
        $newContent = $post->content;

        // find differences between
        // old and new posts
        $diff = DiffHelper::calculate(
            $this->oldContent,
            $newContent,
            'Json', // we will store this data in our db
            [
                'context' => (int)
                    $this->settings->get($this->settingsPrefix.'neighborLines' , 2)
            ],
            [
                'detailLevel' => (string)
                    $this->settings->get($this->settingsPrefix.'detailLevel' , 'line')
            ]
        );

        // check if this post has been edited before
        // and increase the revision number
        $latestRevModel = Diff::where('post_id', $post->id)->latest()->first();
        $revision = ($latestRevModel ? $latestRevModel->revision + 1 : 1);

        $diff = Diff::build(
            $revision,
            $post->id,
            $event->actor->id,
            $diff
        );

        $diff->created_at = Carbon::now();
        $diff->save();
    }
}
