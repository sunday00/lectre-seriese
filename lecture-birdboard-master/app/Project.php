<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use RecordActivity;

    protected $guarded = [
        // 'title', 'description', "owner_id"
    ];

    public function addTask($body)
    {
        return $this->tasks()->create(compact('body'));
    }

    public function addTasks( array $tasks )
    {
        return $this->tasks()->createMany($tasks);
    }

    public function invite(User $user)
    {
        return $this->members()->attach($user);
    }

    public function path()
    {
        return "/projects/{$this->id}";
    }

    public function mergedActivity()
    {
        return $this->activity->merge($this->tasks->pluck("activity")->flatten(1))->sortByDesc("created_at");
    }

    public function owner()
    {
        return $this->belongsTo("App\User");
    }

    public function members()
    {
        return $this->belongsToMany(User::class, "project_members")->withTimestamps();
    }

    public function tasks()
    {
        return $this->hasMany('App\Task');
    }

    
}
