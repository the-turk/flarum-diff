<?php

namespace TheTurk\Diff\Listeners;

use Flarum\Console\Event\Configuring;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Contracts\Events\Dispatcher;
use TheTurk\Diff\Console\ArchiveCommand;

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
