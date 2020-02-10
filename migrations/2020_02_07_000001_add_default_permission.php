<?php
use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'discussion.viewEditHistory' => Group::MEMBER_ID,
]);
