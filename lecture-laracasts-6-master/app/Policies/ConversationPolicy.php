<?php

namespace App\Policies;

use App\Conversation;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ConversationPolicy
{
    use HandlesAuthorization;

    // public function before(User $user)
    // {
    //     if ($user->id === 30){
    //         return true;
    //     }
    //     // if you are not understand completely this method,
    //     // don't use "else return false".
    //     // this method's return means completely terminate 
    //     // give or not give permission.
    //         // so, if you return true, 
    //         // logged person has permission.
    //         // false mean return 401 or 403.
    //             // it means the person who $user === condition,
    //             // NEVER REACH below methods.
    // }

    /**
     * Determine whether the user can view any conversations.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the conversation.
     *
     * @param  \App\User  $user
     * @param  \App\Conversation  $conversation
     * @return mixed
     */
    public function view(User $user, Conversation $conversation)
    {
        return $conversation->user->is($user);
    }

    /**
     * Determine whether the user can create conversations.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user, Conversation $conversation)
    {
        return $conversation->user->is($user);
    }

    /**
     * Determine whether the user can update the conversation.
     *
     * @param  \App\User  $user
     * @param  \App\Conversation  $conversation
     * @return mixed
     */
    public function update(User $user, Conversation $conversation)
    {
        // return $conversation->user->is($user);
    }

    /**
     * Determine whether the user can delete the conversation.
     *
     * @param  \App\User  $user
     * @param  \App\Conversation  $conversation
     * @return mixed
     */
    public function delete(User $user, Conversation $conversation)
    {
        //
    }

    /**
     * Determine whether the user can restore the conversation.
     *
     * @param  \App\User  $user
     * @param  \App\Conversation  $conversation
     * @return mixed
     */
    public function restore(User $user, Conversation $conversation)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the conversation.
     *
     * @param  \App\User  $user
     * @param  \App\Conversation  $conversation
     * @return mixed
     */
    public function forceDelete(User $user, Conversation $conversation)
    {
        //
    }
}
