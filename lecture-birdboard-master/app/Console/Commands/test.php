<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:file {filename}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test for Tdd file with phpunit';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $filename = $this->argument('filename');
        $this->info(exec( base_path() . '\\vendor\\bin\\phpunit ' . $filename));
    }
}
