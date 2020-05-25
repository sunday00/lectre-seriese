@extends('layouts.layout')

@section('main-content')
    @include('tweety.profiles._profile')    

    <hr />

    @include('tweety._timeline', ['tweeties' => $tweets])
@endsection