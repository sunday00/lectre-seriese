@if( $errors->any() )
    <div class="field mt-6">
        @foreach ($errors->all() as $error)
            <li class="text-mt text-red-500">{{ $error }}</li>
        @endforeach
    </div>
@endif