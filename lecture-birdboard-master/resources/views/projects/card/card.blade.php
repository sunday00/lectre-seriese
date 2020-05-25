<div class="project card flex-col" style="height:160px;">
    <h3 class="-ml-5 mb-2 py-2 pl-4 border-l-4 border-blue-400"><a href="{{ $project->path() }}">{{ $project->title }}</a></h3>
    <div class="text-card mb-4 flex-1">{{ Str::limit($project->description, 35) }}</div>
    <footer class="text-right">
        @can("manage", $project)
        <form action="{{ $project->path() }}" method="POST">
            @csrf
            @method("DELETE")
            <button type="submit" value="submit" class="text-xs">Delete</button>
        </form>
        @endcan
    </footer>
</div>