<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use TheTurk\Diff\Models\Diff;
use TheTurk\Diff\Events\PostWasRollbacked;
use TheTurk\Diff\Repositories\DiffArchiveRepository;
use TheTurk\Diff\Jobs\DeleteDiff;
use Illuminate\Contracts\Events\Dispatcher;
use Carbon\Carbon;
use Flarum\Post\Post;
use InvalidArgumentException;

class RollbackToDiffHandler
{
    use AssertPermissionTrait;

    /**
     * @var Dispatcher
     */
    protected $events;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @var DeleteDiff
     */
    protected $job;

    /**
     * @param Dispatcher $events
     * @param DiffArchiveRepository $diffArchive
     * @param DeleteDiff $job
     */
    public function __construct(
      Dispatcher $events,
      DiffArchiveRepository $diffArchive,
      DeleteDiff $job
    )
    {
        $this->events = $events;
        $this->diffArchive = $diffArchive;
        $this->job = $job;
    }

    public function handle(RollbackToDiff $command)
    {
        $actor = $command->actor;
        $diff = Diff::findOrFail($command->diffId);
        $isSelf = $actor->id === $diff->actor->id;

        if (!$actor->can('deleteEditHistory')
            && !($isSelf && $actor->can('selfDeleteEditHistory'))) {
            throw new PermissionDeniedException();
        }

        $rollbackTo = Diff::where('revision', '>', $diff->revision)
                      ->where('post_id', $diff->post_id)
                      ->where('deleted_at', null)
                      ->firstOrFail();

        if ($rollbackTo->archived) {
            $postContent = $this->diffArchive->getArchivedContent(
                $diff->post_id,
                $rollbackTo->id
            );
        } else {
            $postContent = $rollbackTo->content;
        }

        if(null === $postContent) {
            throw new InvalidArgumentException(
                'Post\'s content can\'t be null.'
            );
        }

        for ($i = $command->maxRevisionCount; $i > $diff->revision; $i--) {
            $diffToDelete = Diff::where('revision', $i)
                            ->where('post_id', $diff->post_id)
                            ->firstOrFail();

            $this->job->delete($diffToDelete, $actor);
        }

        $post = Post::findOrFail($diff->post_id);
        $post->content = $postContent;
        $post->edited_at = Carbon::now();
        $post->edited_user_id = $actor->id;
        $post->save();

        $diff->reverted_user_id = $actor->id;
        $diff->reverted_at = Carbon::now();
        $diff->save();

        $this->events->dispatch(
            new PostWasRollbacked($post, $actor)
        );
    }
}
