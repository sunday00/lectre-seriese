<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Http\Request;
use App\Project;

class ProjectsController extends Controller
{
    public function __construct() {
        
    }

    public function validator()
    {
        return request()->validate([
            "title" => "sometimes|required",
            "description" => "sometimes|required",
            "notes" =>  'sometimes|required',
            "owner_id"  =>  'sometimes|required'
        ]);
    }

    public function index()
    {
        // $projects = auth()->user()->projects;
        $projects = auth()->user()->accessibleProjects();
        return view('projects.index', compact('projects'));
    }

    public function show(Project $project)
    {
        $this->authorize('update', $project);

        return view('projects.show', compact('project'));
    }


    public function create()
    {
        return view('projects.create');
    }

    public function store()
    {
        $project = auth()->user()->projects()->create($this->validator());

        if ($tasks = request('tasks')){
            // foreach(request('tasks') as $task){
            //     $project->addTask($task['body']);
            // }
            $project->addTasks($tasks);
        }

        if (request()->wantsJson()) {
            return ['message' => $project->path()];
        }

        return redirect($project->path());
    }

    public function edit(Project $project)
    {
        $this->authorize('update', $project);
        return view("projects.edit", compact("project"));
    }

    public function update ( UpdateProjectRequest $request )
    {
        // $this->authorize('update', $project);

        // $project->update(/*$this->validator()*/ $request->validated());

        return redirect( $request->save()->path() );
    }

    public function destroy (Project $project)
    {
        $this->authorize('manage', $project);
        $project->delete();
        return redirect("/projects");
    }
}
