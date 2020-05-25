{{-- @if(  current_user()->is($user)  ) --}}
@can('update', $user)
    <a href="{{ $user->profile('edit') }}"
        class="rounded-full shadow py-2 px-4 text-sm mr-2"

    >
        Edit Profile
    </a>
{{-- @endif --}}
@endcan