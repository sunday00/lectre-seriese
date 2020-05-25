<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

trait RecordActivity 
{
    public $oldAttributes = [];

    public static function bootRecordActivity()
    {
        static::updating(function (Model $model)
        {
            $model->oldAttributes = $model->getOriginal();
        });

        foreach (self::recordableEvents() as $event){
            static::$event(function ($model) use ($event) {
                $model->recordActivity($model->activityDescription($event));
            });
        }
    }

    protected function activityDescription($event)
    {
        if ( $event === "updated" && $this->isDirty('completed') || $event === "created" && $this->completed === true ) return $this->completed === true ? "completed_task" : "incompleted_task";
        else return "{$event}_".strtolower(class_basename($this));
    }

    protected static function recordableEvents()
    {
        if (isset( static::$recordableEvents )){
            return static::$recordableEvents;
        } 
            
        return ['created', 'updated'];
    }

    public function recordActivity (String $description)
    {
        // $this->activity()->create(compact('description'));
        $this->activity()->create([
            // 'user_id'       =>  ($this->project ?? $this)->owner->id,
            'user_id'       =>  \Auth::id() ?? ($this->project ?? $this)->owner->id,
            'project_id'    =>  class_basename($this) === "Project" ? $this->id : $this->project->id,
            'description'   =>  $description,
            'changes' => $this->activityChange()
        ]);
    }

    public function activity()
    {
        return $this->morphMany(Activity::class,"subject")->latest();
    }
    
    private function activityChange()
    {
        if ( $this->wasChanged() ){
            return [
                'before'    => \Arr::except(array_diff($this->oldAttributes, $this->getAttributes()), "updated_at"),
                'after'     => \Arr::except($this->getChanges(), "updated_at")
            ] ;
        }
    }


}