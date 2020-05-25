@extends('layouts.layout')

@section('main-content')
    
    @forelse ($users as $user)
        <a href="{{$user->profile()}}" class="flex items-center mb-5">
            <img src="{{ $user->avatar }}" alt="{{ $user->name }}'s avatar'"
                class="w-16 rounded-full mr-4 border border-gray-500"
            >
            <div>
                <h4 class="font-bold">{{'@'.$user->name}}</h4>
            </div>
        </a>
    @empty
        
    @endforelse

    {{ $users->links() }}

@endsection