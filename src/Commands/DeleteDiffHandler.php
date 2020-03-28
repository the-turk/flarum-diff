<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\AssertPermissionTrait;
use Flarum\User\Exception\PermissionDeniedException;
use TheTurk\Diff\Repositories\DiffArchiveRepository;
use TheTurk\Diff\Models\Diff;
use Carbon\Carbon;

class DeleteDiffHandler
{
    use AssertPermissionTrait;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @param DiffArchiveRepository $diffArchive
     */
    public function __construct(DiffArchiveRepository $diffArchive)
    {
        $this->diffArchive = $diffArchive;
    }

    /*
     * Deleting revision will keep their rows.
     * Only the revision contents will be removed for good.
     */
    public function handle(DeleteDiff $command)
    {
        $actor = $command->actor;
        $diff = Diff::findOrFail($command->diffId);

        $isSelf = $actor->id === $diff->actor->id;

        if (!$actor->can('deleteEditHistory')
            && !($isSelf && $actor->can('selfDeleteEditHistory'))) {
            throw new PermissionDeniedException();
        }

        // if this is an archived revision
        if($diff->archive_id !== null) {
            $this->diffArchive->deleteArchivedContent(
                $diff->archive_id,
                $diff->id
            );
            // it's not archived anymore
            $diff->archive_id = null;
        }

        if($diff->archive_id === null) $diff->content = null;
        $diff->deleted_user_id = $actor->id;
        $diff->deleted_at = Carbon::now();
        $diff->save();
    }
}
