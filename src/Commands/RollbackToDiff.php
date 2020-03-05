<?php
namespace TheTurk\Diff\Commands;

use Flarum\User\User;

class RollbackToDiff
{
    /**
     * @var User
     */
    public $actor;

    /**
     * @var int
     */
    public $diffId;

    /**
     * @var int
     */
    public $maxRevisionCount;

    /**
     * @param User $actor
     * @param int  $diffId
     * @param int  $maxRevisionCount
     */
    public function __construct(User $actor, int $diffId, int $maxRevisionCount)
    {
        $this->actor = $actor;
        $this->diffId = $diffId;
        $this->maxRevisionCount = $maxRevisionCount;
    }
}
