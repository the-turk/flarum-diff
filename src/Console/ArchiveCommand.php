<?php

namespace TheTurk\Diff\Console;

use TheTurk\Diff\Diff;
use TheTurk\Diff\Jobs\ArchiveDiffs;
use Illuminate\Console\Command;
use Carbon\Carbon;

class ArchiveCommand extends Command
{
    /**
     * @var string
     */
    protected $signature = 'diff:archive';

    /**
     * @var string
     */
    protected $description =
        'If a post\'s revision count is greater (or equal) than X,
        first Y can be stored as merged & compressed using this command.
        Specify X and Y from the settings modal.';

    public function handle()
    {
        $job = app()->make(ArchiveDiffs::class);
        $time = Carbon::now();
        $this->info("Archive post's revisions {$time}");
        return $job->archiveAll();
    }
}
