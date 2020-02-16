<?php
use Flarum\Database\Migration;
use Flarum\Group\Group;

return Migration::addPermissions([
    'viewEditHistory' => Group::MEMBER_ID,
]);
