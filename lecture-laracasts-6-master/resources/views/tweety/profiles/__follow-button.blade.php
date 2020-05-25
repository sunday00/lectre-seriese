@if (  current_user()->isNot($user)  )
    <form action="{{route('tweety.profiles.follow', $user->username) }}" method="POST">
        @csrf
        <button class="bg-blue-500 rounded-full shadow py-2 px-4 text-white text-sm" type="submit">
            {{ current_user()->isFollowing($user) ? 'unFollow' : 'Follow' }}
        </button>
    </form>
@endif