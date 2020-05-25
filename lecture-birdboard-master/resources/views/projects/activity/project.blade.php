<span class="text-red-300">{{ $activity->description }}</span>

@if( isset($activity->changes) && count($activity->changes['after']) == 1 )
    <strong>{{ key($activity->changes['after']) }}</strong>
@else
    this
@endif

<p class="text-gray-600 text-right">
    - {{ $activity->created_at->diffForHumans(null, true) }}
    <span class="text-blue-400">{{ $activity->user->name }}</span>
</p>
