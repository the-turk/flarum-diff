<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use TheTurk\Diff\Models\Diff;
use TheTurk\Diff\Jobs\DeleteDiff as DeleteDiffJob;

class DeleteDiffHandler
{
    use AssertPermissionTrait;

    /**
     * @var DeleteDiffJob
     */
    protected $job;

    /**
     * @param DeleteDiffJob $job
     */
    public function __construct(DeleteDiffJob $job)
    {
        $this->job = $job;
    }

    public function handle(DeleteDiff $command)
    {
        $actor = $command->actor;
        $diff = Diff::findOrFail($command->diffId);

        $isSelf = $actor->id === $diff->actor->id;

        if (!$actor->can('deleteEditHistory')
            && !($isSelf && $actor->can('selfDeleteEditHistory'))) {
            throw new PermissionDeniedException();
        }

        $this->job->delete($diff, $actor);
    }
}
