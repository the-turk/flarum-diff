<?php
namespace TheTurk\Diff\Models;

use Flarum\Database\AbstractModel;
use Illuminate\Support\Arr;

class DiffArchive extends AbstractModel
{
    public $timestamps = false;

    /**
     * {@inheritdoc}
     */
    protected $table = 'post_edit_histories_archive';
}
