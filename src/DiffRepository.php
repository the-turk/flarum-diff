<?php
namespace TheTurk\Diff;

use Carbon\Carbon;
use Illuminate\Database\Query\Expression;

class DiffRepository
{
    /**
     * Get a new query builder.
     *
     * @return Builder
     */
    public function query()
    {
        return Diff::query();
    }

    /**
     * Find diffs that match certain conditions.
     *
     * @param array $where
     * @param array $sort
     * @param int $count
     * @param int $start
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findWhere(array $where = [], $sort = [])
    {
        $query = $this->query()->where($where);

        foreach ((array) $sort as $field => $order) {
            $query->orderBy($field, $order);
        }

        return $query->get();
    }
}
