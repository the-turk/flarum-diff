<?php

namespace TheTurk\Diff\Jobs;

use TheTurk\Diff\Models\Diff;
use Psr\Log\LoggerInterface;
use TheTurk\Diff\Repositories\DiffArchiveRepository;
use Flarum\Settings\SettingsRepositoryInterface;

class ArchiveDiffs
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var LoggerInterface
     */
    protected $log;

    /**
     * @var DiffArchiveRepository
     */
    protected $diffArchive;

    /**
     * @var bool
     */
    protected $revLimit;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param DiffArchiveRepository $diffArchive
     */
    public function __construct(
      SettingsRepositoryInterface $settings,
      LoggerInterface $log,
      DiffArchiveRepository $diffArchive
    )
    {
        $this->settings = $settings;
        $this->log = $log;
        $this->diffArchive = $diffArchive;

        $this->revLimit = $this->sanitizeFloat(
            $settings->get('the-turk-diff.archiveLimit', 15)
        );
    }

    /**
     * @param int $postId
     * @param int $maxRevision
     */
    public function archiveForPost(int $postId, int $maxRevision)
    {
        if(!($maxRevision >= $this->revLimit)) return;

        $slope = $this->sanitizeFloat(
            $this->settings->get('the-turk-diff.archiveSlope', 0.4)
        );

        $coefficient = $this->sanitizeFloat(
            $this->settings->get('the-turk-diff.archiveCoefficient', 0)
        );

        $linearEquation = (int)floor($slope * $maxRevision + $coefficient);

        if($linearEquation > 0) {
            try {
                $diffsToBeArchived = Diff::where('revision', '<=', $linearEquation)
                    ->where('archived', false)
                    ->where('deleted_at', null)
                    ->where('post_id', $postId)
                    ->get();

                if($diffsToBeArchived->count() > 0) {
                    foreach($diffsToBeArchived as $diff) {
                        $this->log->info(
                            "[the-turk/flarum-diff] |> archiving revision #{$diff->id} from post #{$postId}"
                        );

                        $this->diffArchive->archiveContent(
                            $diff->post_id,
                            $diff->id,
                            $diff->content
                        );

                        $updateDiff = Diff::findOrFail($diff->id);
                        $updateDiff->archived = true;
                        $updateDiff->content = null;
                        $updateDiff->save();
                    }
                }
            } catch (\Exception $e) {
                $this->log->error($e->getMessage());
            }
        }
    }

    public function archiveAll()
    {
        /* ToDo: try to use below query next time.
        SELECT `id`, `post_id`, `revision`, `content`, `deleted_at`, `archived`
          FROM (
            SELECT `id`, `post_id`, `revision`, `content`, `deleted_at`, `archived`,
              @row_number := IF(@current_post = `post_id`, @row_number + 1, 1) AS `RowNumber`,
              @current_post := `post_id` AS `CurrentPost`
            FROM `post_edit_histories`,
              (SELECT @current_post:=0, @row_number:=0) as t
          ) ranked
        WHERE `revision` >= $this->greaterOrEqual AND `RowNumber` <= $this->archiveFirst
          AND `archived` = false AND `deleted_at` IS NULL AND `content` IS NOT NULL
        ORDER BY `post_id`, `revision` ASC;
        */

        $postsToBeArchived = Diff::select('post_id')
            ->selectRaw('MAX(revision) AS revision')
            ->where('revision', '>=', $this->revLimit)
            ->where('archived', false)
            ->where('deleted_at', null)
            ->groupBy('post_id')
            ->get();

        if($postsToBeArchived->count() > 0) {
            foreach($postsToBeArchived as $post) {
                $this->archiveForPost($post->post_id, $post->revision, null);
            }
        }
    }

    /**
     * @param float $number
     * @return float
     */
    public function sanitizeFloat(float $number) {
        return floatval(preg_replace('/[^-0-9\.]/', '', $number));
    }
}
