@extends('layout')
  
@section('content')

<div id="wrapper">
	<div id="page" class="container">
        @forelse ($articles as $article)
		<div id="content">
			<div class="title">
                <h2><a href="{{ $article->url() }}">{{ $article->title }}</a></h2>
			</div>
			<p><img src="/images/banner.jpg" alt="" class="image image-full" /> </p>
			{!! $article->excerpt !!}
		</div>
		@empty
			<p>no relrvant articles here</p>
        @endforelse
	</div>
</div>
@endsection