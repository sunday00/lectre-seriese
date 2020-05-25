<?php

namespace App;

use \Carbon\Carbon;
use InvalidArgumentException;

class Schedule
{
    public $start, $end;
    public function __construct(String $start, String $end) {
        if( Carbon::parse($start)->gte(Carbon::parse($end)) ){
            throw new InvalidArgumentException('Start is more recent then end');
        }
        
        $this->start = $start;
        $this->end = $end;
    }

    public function isEndValid()
    {
        return Carbon::parse($this->end)
            ->lte(Carbon::tomorrow());
    }
}