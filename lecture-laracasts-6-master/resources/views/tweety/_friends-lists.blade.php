<div class="bg-blue-100 rounded-lg p-4">
    <h3 class="font-bold text-xl mb-4">Followings</h3>

    <ul>
        @forelse (auth()->user()->followings as $user)
        <li class="mb-4">
            <a href="{{route('tweety.profiles.show', $user->username)}}">
            <div class="flex items-center">
                <img class="rounded-full mr-2 w-12" src="{{$user->avatar}}" alt="{{$user->name}}'s avatar'">
                <span class="text-sm">{{$user->name}}</span>
            </div>
            </a>
        </li>
        @empty
        <li>
            No following Yet.
        </li>
        @endforelse
    </ul>
</div>