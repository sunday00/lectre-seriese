<?php

namespace App\Http\Controllers;

use App\Project;
use App\Task;
use Illuminate\Http\Request;

class ProjectsTaskController extends Controller
{
    public function store (Project $project)
    {
        $this->authorize('update', $project);

        request()->validate(['body' => "required"]);
        $project->addTask(request('body'));

        return redirect($project->path());
    }

    public function update (Project $project, Task $task)
    {
        $this->authorize('update', $project);

        // $attributes = request()->validate(['body' => "required"]);
        
        // $task->update([
        //     'body'      =>  request('body'),
        //     'completed' =>  request()->has('completed')
        // ]);

        $task->update( request()->validate(['body' => "required"]) );

        request("completed") ? $task->complete() : $task->incomplete();
        

        return redirect($project->path());
    }

    public function delete (Project $project, Task $task)
    {
        $this->authorize('update', $project);

        $task->delete();
    }

}
