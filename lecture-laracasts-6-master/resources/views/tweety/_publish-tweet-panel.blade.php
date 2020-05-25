<div class="border border-blue-400 rounded-lg px-8 py-6 mb-8">
    <form action="{{ route('tweety.store') }}" method="POST">
        @csrf
        @method('POST')
        <textarea class="w-full" name="body" placeholder="TweetSome" required></textarea>
        
        <hr class="my-4" />

        <footer class="flex justify-between">
            <a href="{{ auth()->user()->profile() }}">
                <img class="rounded-full mr-2 w-12" src="{{ auth()->user()->avatar }}" alt="me">
            </a>
            <button class="bg-blue-500 hover:bg-blue-600 rounded-lg shadow py-2 px-2 text-white" type="submit">Tweet-a-roo!</button>
        </footer>
    </form>

    @error('body')
        <p class="text-red-500 text-sm mt-2">{{ $message }}</p>
    @enderror

</div>