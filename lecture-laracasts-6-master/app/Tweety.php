<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tweety extends Model
{
    use Likable;
    
    protected $guarded = [];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
}
