@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <header class="flex items-center itmes-center mb-3 py-4">
                    <div class="flex justify-between items-end w-full">
                        <p class="text-grey-500 text-lg font-normal">
                            <a href="/login">Register</a>
                        </p>
                    </div>
                </header>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="form-group row">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>

                            <div class="col-md-6">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline @error('name') border-red-500 @enderror mb-4" name="name" id="name" type="text" placeholder="name" value="{{ old('name') }}" required autocomplete="name" />

                                @error('name')
                                    <p class="text-red-500 text-xs italic mb-5">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                E-mail Adress
                            </label>

                            <div class="col-md-6">
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline @error('email') border-red-500 @enderror mb-4" name="email" id="email" type="email" placeholder="E-mail" value="{{ old('email') }}" required autocomplete="email" />

                                @error('email')
                                    <p class="text-red-500 text-xs italic mb-5">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>

                            <div>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline @error('password') border-red-500 @enderror mb-4" name="password" id="password" type="password" placeholder="password" value="" required />

                                @error('password')
                                    <p class="text-red-500 text-xs italic mb-5">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password_confirmation">
                                Password Confirm
                            </label>
                            <div>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name="password_confirmation" id="password_confirmation" type="password" placeholder="password_confirmation" value="" required />

                                @error('password_confirmation')
                                    <p class="text-red-500 text-xs italic mb-5">{{ $message }}</p>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="button">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
