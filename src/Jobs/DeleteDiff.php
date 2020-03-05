<?php

namespace TheTurk\Diff\Jobs;

use TheTurk\Diff\Models\Diff;
use Flarum\User\User;
use Carbon\Carbon;
use TheTurk\Diff\Repositories\DiffArchiveRepository;

class DeleteDiff
{
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

    /**
     * @param Diff $diff
     * @param User $actor
     */
    public function delete(Diff $diff, User $actor)
    {
        if($diff->archived) {
            $deleteContent = true;

            $archivedDiffCount = Diff::where('id', '!=', $diff->id)
                ->where('post_id', $diff->post_id)
                ->where('deleted_at', null)
                ->where('archived', true)
                ->count();

            if(!($archivedDiffCount > 0)) $deleteContent = false;

            if($deleteContent === true) {
                $this->diffArchive->deleteArchivedContent(
                    $diff->post_id,
                    $diff->id
                );
            } else {
                $this->diffArchive->deleteArchiveRow($diff->post_id);
            }

            $diff->archived = false;
        }

        if(!$diff->archived) $diff->content = null;
        $diff->deleted_user_id = $actor->id;
        $diff->deleted_at = Carbon::now();
        $diff->save();
    }
}
