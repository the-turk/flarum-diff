<?php
namespace TheTurk\Diff\Repositories;

use Carbon\Carbon;
use Illuminate\Database\Query\Expression;
use Illuminate\Support\Arr;
use TheTurk\Diff\Models\DiffArchive;
use Flarum\Settings\SettingsRepositoryInterface;
use InvalidArgumentException;

class DiffArchiveRepository
{
    /**
     * Get a new query builder.
     *
     * @return Builder
     */
    public function query()
    {
        return DiffArchive::query();
    }

    /**
     * @param int $postId
     * @param int $diffId
     * @param string $diff
     */
    public function archiveContent(int $postId, int $diffId, string $diff)
    {
        $query = $this->query()->firstOrCreate(['post_id' => $postId]);

        $contents = ($query->contents ? $this->getContents($query->contents) : []);

        $query->contents = \gzcompress(
          json_encode(
            Arr::prepend(
              $contents,
              $diff,
              $diffId
            )
          ), -1);

        return $query->save();
    }

    /**
     * @param int $postId
     * @param int $diffId
     * @return string
     */
    public function getArchivedContent(int $postId, int $diffId)
    {
        $query = $this->query()->where('post_id', $postId)->firstOrFail();

        return Arr::get(
          $this->getContents($query->contents),
          $diffId,
          null
        );
    }

    /**
     * @param int $postId
     * @param int $diffId
     */
    public function deleteArchivedContent(int $postId, int $diffId)
    {
        $query = $this->query()->where('post_id', $postId)->firstOrFail();

        $contents = $this->getContents($query->contents);

        Arr::forget($contents, $diffId);

        $query->contents = \gzcompress(json_encode($contents), -1);

        return $query->save();
    }

    /**
     * @param int $postId
     */
    public function deleteArchiveRow(int $postId)
    {
        $query = $this->query()->where('post_id', $postId);

        return $query->delete();
    }

    /**
     * @param string $contents
     */
    public function getContents(string $contents)
    {
        return json_decode(\gzuncompress($contents), true);
    }
}
