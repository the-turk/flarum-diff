<?php

/**
 * Diff Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE file that was distributed
 * with this source code.
 *
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 *
 * @version    Release: 1.0.8
 *
 * @link       https://github.com/the-turk/flarum-diff
 */

namespace IanM\Diff;

use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Extend;
use Flarum\Post\Post;
use Illuminate\Contracts\Events\Dispatcher;
use IanM\Diff\Api\Controllers;
use IanM\Diff\Api\Serializers\DiffSerializer;
use IanM\Diff\Console\ArchiveCommand;
use IanM\Diff\Models\Diff;

return [
    (new Extend\Routes('api'))
        ->get('/diff', 'diff.index', Controllers\ListDiffController::class)
        ->delete('/diff/{id}', 'diff.delete', Controllers\DeleteDiffController::class)
        ->post('/diff/{id}', 'diff.rollback', Controllers\RollbackToDiffController::class),
    (new Extend\Frontend('admin'))
        ->css(__DIR__.'/less/admin.less')
        ->js(__DIR__.'/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->css(__DIR__.'/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Locales(__DIR__.'/locale')),

    // GetModelRelationship event is deprecated by
    // https://github.com/flarum/core/pull/2100
    (new Extend\Model(Post::class))
        ->hasMany('diff', Diff::class, 'post_id'),

    static function (Dispatcher $events) {


        $events->subscribe(Listeners\PostActions::class);
        $events->subscribe(Listeners\AddDiffRelationship::class);
        $events->subscribe(Listeners\UserPreferences::class);

        //$app->register(Providers\ConsoleProvider::class);
    },

    (new Extend\Console())
        ->command(ArchiveCommand::class),

    (new Extend\ApiSerializer(BasicPostSerializer::class))
        ->hasMany('diff', DiffSerializer::class),

    (new Extend\Settings())
        ->serializeToForum('textFormattingForDiffPreviews', 'the-turk-diff.textFormatting', function ($value) {
            if ($value === '' || $value === null) {
                // Default value
                $value = true;
            }

            return (bool) $value;
        }),
];
