<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    // public function getRouteKeyName()
    // {
    //     return 'body';
    // }

    protected $fillable = [
        'title', 'excerpt', 'body', 'user_id'
    ];

    public function url ()
    {
        return route('articles.show', $this);
    }

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function tags ()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }
}
