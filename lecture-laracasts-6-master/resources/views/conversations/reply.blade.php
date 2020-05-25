@foreach ($conversation->reply as $reply)
    <div>
        <p class="m-0">
            <strong>{{ $reply->user->name }}</strong>
            @if ($conversation->best_reply_id == $reply->id)
                <strong style="color:green">BEST</strong>
            @endif
        </p>
        {{ $reply->body }}
    </div>

    {{-- @can('update-conversation', $conversation) --}}
    @can('create', $conversation)
    <form action="/conversations/best-reply" method="POST">
        @csrf
        @method('PATCH')
        <input type="hidden" name="reply" value="{{$reply->id}}">
        <button type="submit" class="btn">best</button>
    </form>
    @endcan

    @continue($loop->last)

    <hr>
@endforeach