@extends('layouts.app')

@section('content')

<div class="projects-show">

    <header class="flex items-center itmes-center mb-3 py-4">
        <div class="flex justify-between items-end w-full">
            <p class="text-grey-500 text-lg font-normal">
                <a href="/projects">My Projects</a> / {{ $project->title }}
            </p>

            <div class="flex items-center">
                @foreach ($project->members as $member)
            <img src="{{$member->avatar()}}" alt="{{ $member->name }}'s avatar'" class="rounded-full inline-block w-8 mr-2" />
                @endforeach
            <img src={{$project->owner->avatar()}} alt="{{ $project->owner->name }}'s avatar'" class="rounded-full inline-block w-8 mr-2" />
                
                <a href="{{ $project->path()."/edit" }}" class="button ml-4">Edit One</a>
            </div>
        </div>
    </header>

    <div class="main">
        <div class="md:flex -mx-3">
            <div class="md:w-3/4 px-3 mb-6">
                <div class="mb-6">
                    <h2 class="text-grey-500 font-semibold text-lg mb-3">Tasks</h2>

                    @foreach ($project->tasks as $task)
                    <div class="card mb-3">
                        <form action="{{ $task->path() }}" method="POST">
                            @csrf
                            @method('PATCH')
                            <div class="flex">
                                <input type="text" class="w-full {{$task->completed ? "text-grey-400" : ""}} bg-card" name="body" value="{{$task->body}}" />
                                <label class="inline-flex items-center">
                                    <input type="checkbox" class="form-checkbox h-4 w-4 text-green-400" name="completed" onchange="this.form.submit()" {{ $task->completed ? "checked" : "" }} />
                                </label>
                            </div>
                        </form>
                    </div>                        
                    @endforeach
                    <div class="card mb-3">
                        <form action="{{ $project->path().'/tasks' }}" method="POST">
                            @csrf
                            <input class="w-full bg-card" type="text" name="body" placeholder="Add a new task">
                        </form>
                    </div>
                    
                </div>
                <div>
                    <h2 class="text-grey-500 font-semibold text-lg mb-3">General Note</h2>
                    <form action="{{ $project->path() }}" method="POST">
                        @csrf
                        @method("PATCH")
                        <textarea class="card w-full min-h-medium mb-2" placeholder="Write anything..." name="notes">{{ $project->notes }}</textarea>

                        <button type="submit" class="button">UPDATE</button>
                    </form>

                    

                    @include('errors')

                </div>
            </div>
            <div class="md:w-1/4 px-3">
                @include('projects.card.card')

                @include('projects.card.activity')

                @can('manage', $project)
                    @include('projects.card.invite')
                @endcan
            </div>
        </div>
    </div>
</div>

@endsection