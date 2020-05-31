<?php

namespace TheTurk\Diff\Providers;

use Flarum\Foundation\AbstractServiceProvider;
use FoF\Console\Providers\ConsoleProvider as Console;
use Illuminate\Console\Scheduling\Schedule;

class ConsoleProvider extends AbstractServiceProvider
{
    public function register()
    {
        if (!defined('ARTISAN_BINARY')) {
            define('ARTISAN_BINARY', 'flarum');
        }

        // force registering the Schedule as singleton
        $this->app->register(Console::class);

        // set a weekly cron job which is working on sundays at 02:00 AM
        // (nothing special)
        $this->app->resolving(Schedule::class, function (Schedule $schedule) {
            $schedule->command('diff:archive')
                ->weeklyOn(2, '2:00')
                ->appendOutputTo(storage_path('logs/diff-archive-task.log'));
        });
    }
}
