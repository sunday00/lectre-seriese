    <div class="card mt-3">
    <ul class="text-xs">
        @foreach ( $project->mergedActivity() as $activity)
            <li class="{{$loop->last ? "" : "mb-1"}}">
                



                

                @if( $activity->subject_type === "App\Project" )
                    @include('projects.activity.project')
                @else
                    @include('projects.activity.task')
                @endif
                
                



            </li>
        @endforeach    
    </ul>
</div>