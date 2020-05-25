<h1>
    hello 7 {{ $name }}. {{ $slot }}
</h1>

<div>
    @if ( isset($h2) )
        <h2>Hello again {{$h2}}</h2>
    @endif
</div>