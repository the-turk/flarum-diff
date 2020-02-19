<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use TheTurk\Diff\Diff;
use Illuminate\Contracts\Events\Dispatcher;
use Carbon\Carbon;

class DeleteDiffHandler
{
    use AssertPermissionTrait;

    public function handle(DeleteDiff $command)
    {
        /**
         * @var Diff
         */
        $actor = $command->actor;
        $diff = Diff::findOrFail($command->diffId);

        $isSelf = $actor->id === $diff->actor->id;

        if (!$actor->can('deleteEditHistory')
            && !($isSelf && $actor->can('selfDeleteEditHistory'))) {
            throw new PermissionDeniedException();
        }

        $diff->diff = null;
        $diff->deleted_user_id = $actor->id;
        $diff->deleted_at = Carbon::now();
        $diff->save();
    }
}
