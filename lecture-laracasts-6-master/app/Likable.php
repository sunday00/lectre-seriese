<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;

trait Likable
{
    public function scopeWithLikes(Builder $query)
    {
        // $query->leftJoinSub(
        //     'SELECT tweety_id,
        //         sum(liked) likes ,
        //         count(*) - sum(liked) dislikes
        //     FROM LIKES
        //     GROUP BY TWEETY_ID',
        //     'likes',
        //     'likes.tweety_id',
        //     'tweeties.id',
        // ); 
            // this beautiful sql is not work with oracle 11.
            // because sub query alias replaced with 'as' keyword,
            // like below
            // ....left join (select ...) AS sub ON ....
            // but oracle query should be
            // ... left join (select ...)    sub ON ....

        $query->join(
            \DB::raw(
                "(SELECT tweety_id, sum(liked) likes, count(*) - sum(liked) dislikes FROM LIKES GROUP BY TWEETY_ID ) LIKES"
            ), function ($join){
                return $join->on('LIKES.TWEETY_ID', '=', 'TWEETIES.ID');
            }
        );
       
        // so if you use oracle old version, should use raw or other way.

    }
    public function isLikedBy(User $user)
    {
        return (bool) $user->likes
            ->where('tweety_id', $this->id)
            ->where('liked', true)
            ->count();
    }

    public function isDislikedBy(User $user)
    {
        return (bool) $user->likes
            ->where('tweety_id', $this->id)
            ->where('liked', false)
            ->count();
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function like($user = null, $like = true)
    {
        $userId = $user ? $user->id : auth()->id();
        $exist = $this->likes()
            ->where('user_id', $userId)
            ->first();

        if( isset($exist) && $exist->liked == $like ){
            $exist->delete();
        } else {
            $this->likes()->updateOrCreate([
                'user_id'   =>  $userId
            ],[
                'liked' => $like
            ]);
        }
    }

    public function dislike($user = null)
    {
        $this->like($user, false);
    }
}