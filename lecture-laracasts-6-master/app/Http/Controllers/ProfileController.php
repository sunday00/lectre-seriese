<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return view('tweety.profiles.show', [
            'user'      => $user,
            'tweets'    => $user->tweets()->withLikes()->paginate(3)
        ]);
    }

    public function edit(User $user)
    {
        // abort_if($user->isNot(current_user()), 403);
        // $this->authorize('update', $user);
        return view('tweety.profiles.edit', compact('user'));
    }
    
    public function update(User $user)
    {
        $attr = request()->validate([
            'name'      => ['string', 'required', 'max:255'],
            'username'  => ['string', 'required', 'max:255', 'alpha_dash', Rule::unique('users')->ignore($user)],             
            'email'     => ['string', 'required', 'max:255', 'email', Rule::unique('users')->ignore($user)],
            'avatar'    => ['file'],
            'password'  => ['string', 'required', 'min:4', 'max:255', 'confirmed']
        ]);

        if (\Arr::exists($attr, 'avatar')) $attr['avatar'] = request('avatar')->store('avatars');
        $user->update($attr);
        
        return redirect($user->profile());
    }
}
