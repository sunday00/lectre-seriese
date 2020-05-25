<?php

namespace App;

use App\User;
use App\Conversation;
use Illuminate\Database\Eloquent\Model;

class ConversationReply extends Model
{
    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
