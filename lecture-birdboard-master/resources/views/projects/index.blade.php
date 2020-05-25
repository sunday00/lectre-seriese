@extends('layouts.app')

@section('content')

<div class="projects-index">

    <header class="flex items-center itmes-center mb-3 py-4">
        <div class="flex justify-between items-end w-full">
            <h2 class="text-grey-500 text-lg font-normal">My Projects</h2>
            <a href="/projects/create" class="button" @click.prevent="$modal.show('create-project-modal')">Create New One</a>
        </div>
    </header>

    <div class="projects-wrap md:flex md:flex-wrap -mx-3">
        @forelse ($projects as $project)
        <div class="md:w-1/3 px-3 pb-6">
            @include('projects.card.card')
        </div>
        @empty
        <div>
            <h3>No projects yet.</h3>
        </div>
        @endforelse
    </div>

    <new-project-modal></new-project-modal>

</div>

@endsection