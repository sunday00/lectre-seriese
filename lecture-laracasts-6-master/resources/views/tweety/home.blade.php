{{-- @extends('layouts.layout') --}}
@component('components.app')

    @include('tweety._publish-tweet-panel')
                
    @include('tweety._timeline')

@endcomponent
{{-- @endsection --}}
