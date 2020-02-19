<?php
namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Diff;
use TheTurk\Diff\Renderer\Html\Json as JsonRenderer;
use Jfcherng\Diff\Differ;
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
        $differ = new Differ(
            explode("\n", $this->oldContent),
            explode("\n", $newContent),
            [
                'context' => (int)
                $this->settings->get($this->settingsPrefix.'neighborLines', 2),

                // following lines are not necessary
                // but notes for the future: these options
                // must be that way and the opposite won't work because
                // the way we're storing diffs. It has been summarized
                // for less storage volume and different from the base dependency
                // I did it this way because Flarum doesn't ignore them either.

                // do not ignore case difference
                'ignoreCase' => false,
                // do not ignore whitespace difference
                'ignoreWhitespace' => false,
            ]
        );

        $renderer = new JsonRenderer();

        // check if this post has been edited before
        // and increase the revision number
        $latestRevModel = Diff::where('post_id', $post->id)->latest()->first();
        $revision = ($latestRevModel ? $latestRevModel->revision + 1 : 1);

        $diff = Diff::build(
            $revision,
            $post->id,
            $event->actor->id,
            $renderer->render($differ)
        );

        $diff->created_at = Carbon::now();
        $diff->save();
    }
}
