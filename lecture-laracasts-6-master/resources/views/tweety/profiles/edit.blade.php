@extends('layouts.layout')

@section('main-content')

    <form action="{{ $user->profile('update') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PATCH')
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="name">name</label>
            <input class="border border-gray-400 p-2 w-full" type="text" name="name" id="name" value="{{ $user->name }}" required>
            @error('name')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="username">username</label>
            <input class="border border-gray-400 p-2 w-full" type="text" name="username" id="username" value="{{ $user->username }}" required>
            @error('username')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">email</label>
            <input class="border border-gray-400 p-2 w-full" type="email" name="email" id="email" value="{{ $user->email }}" required>
            @error('email')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="avatar">avatar</label>
            <div class="flex">
                <input class="border border-gray-400 p-2 w-full" type="file" name="avatar" id="avatar">
                <img src="{{$user->avatar}}" class="w-12" alt="">
            </div>
            @error('avatar')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">password</label>
            <input class="border border-gray-400 p-2 w-full" type="password" name="password" id="password" required>
            @error('password')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password_confirmation">password_confirmation</label>
            <input class="border border-gray-400 p-2 w-full" type="password" name="password_confirmation" id="password_confirmation" required>
            @error('password_confirmation')
                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-6">
            <button class="bg-blue-400 text-white rounded py-2 px-4 hover:gb-blue-500" type="submit">Submit</button>
            <a href="{{ $user->profile() }}" class="hover:underline">Cancel</a>
        </div>
    </form>
    
@endsection