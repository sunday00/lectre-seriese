<?php

namespace App;

use App\User;
use App\ConversationReply;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reply()
    {
        return $this->hasMany(ConversationReply::class);
    }
}
