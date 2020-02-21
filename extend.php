<?php

/**
 * Diff Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-diff
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.1.0-beta.6
 * @link       https://github.com/the-turk/flarum-diff
 */

namespace TheTurk\Diff;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\Diff\Api\Controllers;
use TheTurk\Diff\Listeners;

return [
    (new Extend\Routes('api'))
        ->get('/diff/{id}', 'diff.index', Controllers\ListDiffController::class)
        ->delete('/diff/{id}', 'diff.delete', Controllers\DeleteDiffController::class),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    static function (Dispatcher $events) {
        $events->subscribe(Listeners\PostActions::class);
        $events->subscribe(Listeners\AddDiffRelationship::class);
    }
];
