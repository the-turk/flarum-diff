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

namespace TheTurk\Diff;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Post\Post;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\Diff\Api\Controllers;
use TheTurk\Diff\Models\Diff;

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

    static function (Application $app) {
        /** @var Dispatcher $events */
        $events = $app['events'];

        $events->subscribe(Listeners\PostActions::class);
        $events->subscribe(Listeners\AddDiffRelationship::class);
        $events->subscribe(Listeners\RegisterConsoleCommand::class);
        $events->subscribe(Listeners\UserPreferences::class);

        $app->register(Providers\ConsoleProvider::class);
    },
];
