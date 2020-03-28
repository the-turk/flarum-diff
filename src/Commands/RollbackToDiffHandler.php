<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use TheTurk\Diff\Models\Diff;
use TheTurk\Diff\Events\PostWasRollbacked;
use TheTurk\Diff\Repositories\DiffArchiveRepository;
use Illuminate\Contracts\Bus\Dispatcher;
use Flarum\Post\Command\EditPost;
use Carbon\Carbon;
use Flarum\Post\PostRepository;

class RollbackToDiffHandler
{
    use AssertPermissionTrait;

    /**
     * @var \Flarum\Post\PostRepository
     */
    protected $posts;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @param PostRepository $posts
     * @param Dispatcher $bus
     * @param DiffArchiveRepository $diffArchive
     */
    public function __construct(
      PostRepository $posts,
      Dispatcher $bus,
      DiffArchiveRepository $diffArchive
    )
    {
        $this->posts = $posts;
        $this->bus = $bus;
        $this->diffArchive = $diffArchive;
    }

    /*
     * Rollbacking to a revision will be considered as formal edit.
     * Thus, new edit will be performed for post using revision's content
     * that we want to rollback to.
     */
    public function handle(RollbackToDiff $command)
    {
        $actor = $command->actor;
        $diff = Diff::findOrFail($command->diffId);
        $isSelf = $actor->id === $diff->actor->id;

        if (!$actor->can('rollbackEditHistory')
            && !($isSelf && $actor->can('selfRollbackEditHistory'))) {
            throw new PermissionDeniedException();
        }

        $maxRevisionCount = Diff::where('post_id', $diff->post_id)->max('revision');

        $post = $this->posts->findOrFail($diff->post_id, $actor);

        // if we want to rollback to archived revision
        if ($diff->archive_id !== null) {
            $postContent = $this->diffArchive->getArchivedContent(
                $diff->archive_id,
                $diff->id
            );
        } else {
            $postContent = $diff->content;

            // if this is the last revision then its contents
            // gotta be null, because we were retraining its contents
            // from the post subject. We'll add a new revision after
            // this rollback operation so we need to convert this
            // null value into current content first. Revision after
            // rollbacking will be null again because it's the post itself.
            if($diff->revision == $maxRevisionCount
                  && null === $diff->content) {
                    $diff->content = $post->content;
            }
        }

        $postData = [
            'attributes' => [
                'content' => $postContent
            ]
        ];

        if($post->content !== $postContent) {
            // dispatching events occuring when post edited
            // this will also validate our new post
            $this->bus->dispatch(
                new EditPost($diff->post_id, $actor, $postData)
            );

            $diff->rollbacked_user_id = $actor->id;
            $diff->rollbacked_at = Carbon::now();
            // this is to track what's been rollbacked to what
            $diff->rollbacked_to = Diff::where('post_id', $diff->post_id)
                ->where('revision', $maxRevisionCount + 1)
                ->firstOrFail()->id;
            $diff->save();
        }
    }
}
