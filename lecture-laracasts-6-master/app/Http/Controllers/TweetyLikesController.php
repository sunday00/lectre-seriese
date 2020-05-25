<?php

namespace App\Http\Controllers;

use App\Tweety;
use Illuminate\Http\Request;

class TweetyLikesController extends Controller
{
    public function like(Tweety $tweety)
    {
        $tweety->like(current_user());
        return redirect(route('tweety.index'));
    }

    public function dislike(Tweety $tweety)
    {
        $tweety->dislike(current_user());
        return redirect(route('tweety.index'));
    }
}
