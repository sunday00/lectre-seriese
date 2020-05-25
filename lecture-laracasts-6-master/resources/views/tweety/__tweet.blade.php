<div class="flex p-4 border-b border-b-gray-400">
    <div class="mr-2 flex-shrink-0">
        <a href="{{ $tweet->user->profile() }}">
            <img class="rounded-full mr-2 w-12" src="{{$tweet->user->avatar}}" alt="{{$tweet->user->name}}'s avatar'">
        </a>
    </div>

    <div>
        <h5 class="font-bold mb-4">
            <a href="{{ $tweet->user->profile() }}">
                {{ $tweet->user->name }}
            </a>
        </h5>
        <p class="text-sm">
            {{ $tweet->body }}
        </p>

        <div class="flex my-3">
            @include('tweety.___like-buttons', $tweet)
        </div>

    </div>
</div>