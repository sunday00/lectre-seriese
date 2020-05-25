<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Using extends Model
{
    protected $table = "notusingfilesinansans";

    protected $fillable = ['name', 'isuse'];

    public $timestamps = false;
}
