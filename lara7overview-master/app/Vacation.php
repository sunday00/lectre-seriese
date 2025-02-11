<?php

namespace App;

use App\Casts\ScheduleCast;
use Illuminate\Database\Eloquent\Model;

class Vacation extends Model
{
    protected $guards = [];

    protected $casts = [
        'schedule'  =>  ScheduleCast::class
    ];
}
