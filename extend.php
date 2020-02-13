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
 * @version    Release: 0.1.0-beta.2
 * @link       https://github.com/the-turk/flarum-diff
 */

namespace TheTurk\Diff;

use Flarum\Extend;
use Flarum\Foundation\Application;
use Flarum\Frontend\Assets;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Frontend\Compiler\Source\SourceCollector;
use TheTurk\Diff;

return [
    (new Extend\Routes('api'))
        ->get('/diff/{id}', 'diff.index', Diff\Api\Controllers\ListDiffController::class),
    (new Extend\Frontend('admin'))
        ->css(__DIR__ . '/less/admin.less')
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/less/forum.less')
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->subscribe(Diff\Listeners\PostActions::class);
        $events->subscribe(Diff\Listeners\AddDiffRelationship::class);
    },
    // might change this on future releases
    function (Application $app) {
        $settings = $app['flarum.settings'];

        $app->resolving('flarum.assets.forum', function (Assets $assets) use ($settings) {
            $assets->css(function (SourceCollector $sources) use ($settings) {
                $sources->addString(function () use ($settings) {
                    $customHTML = $settings->get(
                        'the-turk-diff.displayMode',
                        'customHTML'
                        ) === 'customHTML';

                    $vars = [
                        'diff-config-custom-html' => $customHTML ? 'true' : 'false',
                    ];

                    return array_reduce(array_keys($vars), function ($string, $name) use ($vars) {
                        return $string."@$name: {$vars[$name]};";
                    }, '');
                });
            });
        });
    }
];
