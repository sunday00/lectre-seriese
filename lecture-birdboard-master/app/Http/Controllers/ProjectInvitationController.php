<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectInvitationRequest;
use App\User;
use App\Project;
use Illuminate\Http\Request;

class ProjectInvitationController extends Controller
{
    public function store(Project $project, ProjectInvitationRequest $request)
    {
        // $this->authorize('update', $project);
        
        // request()->validate([
        //     'email' =>  ['required', 'exists:users,email']
        // ], [
        //     'email.exists'  => 'This is not a member'
        // ]);

        $user = User::whereEmail(request('email'))->first();
        $project->invite($user);

        return redirect($project->path());
    }
}
