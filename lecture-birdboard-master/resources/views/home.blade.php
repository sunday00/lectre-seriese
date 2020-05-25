@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <header class="flex items-center itmes-center mb-3 py-4">
                    <div class="flex justify-between items-end w-full">
                        <p class="text-grey-500 text-lg font-normal">
                            <a href="/projects">My Projects</a>
                        </p>
                    </div>
                </header>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
