<span class="text-green-300">{{ $activity->description }}</span>

<strong>{{ $activity->subject->body }}</strong>
<p class="text-gray-600 text-right">
    - {{ $activity->created_at->diffForHumans(null, true) }}
    <span class="text-blue-400">{{ $activity->user->name }}</span>
</p>