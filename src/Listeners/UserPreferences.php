<?php

namespace IanM\Diff\Listeners;

use Flarum\Event\ConfigureUserPreferences;
use Illuminate\Contracts\Events\Dispatcher;

class UserPreferences
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureUserPreferences::class, [$this, 'addUserPreference']);
    }

    /**
     * Remember user's renderer choice.
     *
     * @param ConfigureUserPreferences $event
     */
    public function addUserPreference(ConfigureUserPreferences $event)
    {
        $event->add('diffRenderer', 'strval', 'sideBySide');
    }
}
