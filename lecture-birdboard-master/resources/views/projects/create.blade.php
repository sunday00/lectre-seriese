@extends('layouts.app')

@section('content')

<div>

    <header class="flex items-center itmes-center mb-3 py-4">
        <div class="flex justify-between items-end w-full">
            <p class="text-grey-500 text-lg font-normal">
                <a href="/projects">My Projects</a> / Create a Project
            </p>
        </div>
    </header>
    
    <form action="/projects" method="POST" class="">
        @csrf

        @include('projects._form')

        <div class="field">
            <div class="control">
                <button type="submit" class="button is-info mr-6">Confirm</button>
                <a href="/projects">Cancel</a>
            </div>
        </div>
    </form>
</div>

@endsection