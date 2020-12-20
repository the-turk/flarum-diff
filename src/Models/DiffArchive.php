<?php

namespace IanM\Diff\Models;

use Flarum\Database\AbstractModel;

class DiffArchive extends AbstractModel
{
    public $timestamps = false;

    /**
     * {@inheritdoc}
     */
    protected $table = 'post_edit_histories_archive';
}
