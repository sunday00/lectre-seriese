@extends('layout')
  
@section('content')

<div id="wrapper">
	<div id="page" class="container">
        <form action="/payment/notify" method="POST">
            @csrf
            <input type="submit" class="button is-primary" value="mk payment" />
        </form>
        
	</div>
</div>
@endsection