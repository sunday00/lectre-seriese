@extends('layouts.app')

@section('content')
    <p>
        <a href="/conversation">back</a>
    </p>

    <h1>{{ $conversation->title }}</h1>

    @can('edit_forum')
        <li>
            <a href="#">Edit Forum</a>
        </li>
    @endcan
    @can('delete_forum')
        <li>
            <a href="#">Delete Forum</a>
        </li>
    @endcan

    <p class="text-muted">Posted by {{ $conversation->user->name }}</p>

    <div>
        {{ $conversation->description }}
    </div>

    <hr>

    @include('conversations.reply')
@endsection