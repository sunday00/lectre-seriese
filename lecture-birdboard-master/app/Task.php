<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use RecordActivity;

    protected $guarded = [

    ];

    protected $touches = ['project'];

    protected $casts = [
        'completed' => 'boolean'
    ];
    
    public static $recordableEvents = [
        'created', 'updated', 'deleted'
    ];

    public function complete()
    {
        $this->update(['completed' => true]);
    }

    public function incomplete()
    {
        $this->update(['completed' => false]);
    }

    public function path()
    {
        return "/projects/{$this->project->id}/tasks/{$this->id}";
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

}
