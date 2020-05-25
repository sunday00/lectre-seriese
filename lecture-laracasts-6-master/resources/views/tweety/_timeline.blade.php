<div class="border border-gray-300 rounded-lg">
    @forelse ($tweeties as $tweet)
        @include('tweety.__tweet')
    @empty
        <p class="p-4">No tweets yet</p>
    @endforelse

    {{ $tweeties->links() }}
</div>