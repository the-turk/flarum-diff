<?php

namespace TheTurk\Diff\Listeners;

use TheTurk\Diff\Console\ArchiveCommand;
use Flarum\Console\Event\Configuring;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Contracts\Events\Dispatcher;

class RegisterConsoleCommand
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Configuring::class, [$this, 'add']);
    }

    public function add(Configuring $event)
    {
        if ($event->app->bound(Schedule::class)) {
            $event->addCommand(ArchiveCommand::class);
        }
    }
}
