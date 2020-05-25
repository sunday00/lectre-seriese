<?php

namespace App;

trait Followable
{
    public function follow(User $user)
    {
        return $this->followings()->save($user);
    }

    public function unFollow(User $user)
    {
        return $this->followings()->detach($user);
    }

    public function followings()
    {
        return $this->belongsToMany(User::class, 'follows', 'user_id', 'following_user_id')->withTimestamps();
    }

    public function isFollowing(User $user)
    {
        //  this select all following users, and performance is significantly decrease.
        // return $this->followings->contains($user);
        
        return $this->followings()->where('following_user_id', $user->id)->exists();

    }

    public function toggleFollow(User $user)
    {
        // if ( $this->isFollowing($user) ){
        //     return $this->unFollow($user);
        // }
        
        // return $this->follow($user);
        return $this->followings()->toggle($user);
    }
}