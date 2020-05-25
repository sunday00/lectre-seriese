@extends('layout')
  
@section('content')

<div id="wrapper">
	@forelse ($noti as $item)
        <li>{{ $item->type }} : {{ $item->data['amount'] }}</li>
    @empty
        <p>No Unread Noti</p>
    @endforelse

    @forelse ($noti2 as $item)
        <li style="color:#ddd;">{{ $item->type }} : {{ $item->data['amount'] }}</li>
    @empty
        <p>No read Noti</p>
    @endforelse
</div>
@endsection