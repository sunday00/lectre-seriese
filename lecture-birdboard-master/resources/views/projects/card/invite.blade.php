<div class="project card flex-col mt-3">
    <h3 class="-ml-5 mb-2 py-2 pl-4 border-l-4 border-blue-400">
        Invite user
    </h3>

    
    <form action="{{ $project->path() . "/invitations"}}" method="POST" class="text-right">
        @csrf
        <input type="email" name="email" class="border border-gray-400 rounded mb-3 w-full py-2 px-3" placeholder="Email" />
        <button type="submit" value="submit" class="text-xs button">Invite</button>
    </form>
    
    @if( $errors->invitations->any() )
    <div class="field mt-6">
        @foreach ($errors->invitations->all() as $error)
            <li class="text-mt text-red-500">{{ $error }}</li>
        @endforeach
    </div>
    @endif
</div>