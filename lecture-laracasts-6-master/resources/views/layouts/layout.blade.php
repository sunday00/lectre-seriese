@extends('layouts.app')

@section('content')
    <div class="lg:flex lg:justify-between">
        @if(auth()->check())
            <div class="lg:w-32">
                @include('tweety._sidebar-links')
            </div>
        @endif

        <div class="lg:flex-1 lg:mx-10" style="max-width: 700px;">
            @yield('main-content')
        </div>

        @if(auth()->check())
            <div class="lg:w-1/6">
                @include('tweety._friends-lists')
            </div>
        @endif
    </div>
@endsection
