<form action="/contact" method="POST">
    @csrf
    <input type="email" name="email">
    <input type="submit">
</form>

@if(session('message'))
    <p>{!! session('message') !!}</p>
@endif