<?php

namespace Tests\Feature;

use Facades\Tests\Setup\ProjectFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Task;
use App\Project;

class ActivityFeedTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function creating_a_project_records_activity()
    {
        $project = ProjectFactory::create();
        $this->assertCount(1, $project->activity);
        // $this->assertEquals('created', $project->activity->first()->description);
        tap($project->activity->last(), function($activity){
            $this->assertEquals('created_project', $activity->description);
            // $this->assertInstanceOf(Project::class, $activity->subject);
            $this->assertNull($activity->changes);
        });
    }

    /** @test */
    public function updating_a_project_records_activity()
    {
        $project = ProjectFactory::create();
        $oldTitle = $project->title;

        $project->update(["title" => "Changed"]);

        $this->assertCount(2, $project->activity);
        tap($project->activity->last(), function($activity) use ($oldTitle) {
            
            $expected = [
                'before'=> ['title' => $oldTitle],
                'after' => ['title' => 'Changed']
            ];

            $this->assertEquals($expected, $activity->changes);
            $this->assertEquals('updated_project', $activity->description);
        });
        
    }

    /** @test */
    public function creating_a_new_task_records_project_activity()
    {
        $project = ProjectFactory::create();
        
        $project->addTask("Some task");

        $this->assertCount(1, $project->activity);
        $this->assertCount(1, $project->tasks->first()->activity);
        // $this->assertEquals('created_task', $project->activity->last()->description);
        tap( $project->tasks->first()->activity->last(), function($activity){
            $this->assertEquals('created_task', $activity->description);
            // $this->assertInstanceOf(Task::class, $activity->subject);
            $this->assertEquals('Some task', $activity->subject->body);
        } );
    }

    /** @test */
    public function updating_a_task_records_project_activity()
    {
        $project = ProjectFactory::create();
        
        $task = $project->addTask("Some task");

        $task->update(["body" => "changed"]);

        $this->assertCount(1, $project->activity);
        $this->assertCount(2, $project->tasks->first()->activity);
        // $this->assertEquals('updated_task', $project->activity->last()->description);
        tap( $project->tasks->first()->activity->last(), function($activity){
            $this->assertEquals('updated_task', $activity->description);
            $this->assertInstanceOf(Task::class, $activity->subject);
            $this->assertEquals('changed', $activity->subject->body);
        } );
    }

    /** @test */
    public function completing_a_new_task_records_project_activity()
    {
        $project = ProjectFactory::withTasks(1)->create();
        
        $this->actingAs($project->owner)->patch($project->tasks->first()->path(), [
            "body"      =>  "foobar",
            "completed" =>  true
        ]);

        $this->assertCount(1, $project->activity);
        $this->assertCount(3, $project->tasks->first()->activity);
        $this->assertEquals('completed_task', $project->tasks->first()->activity->last()->description);

        // dd( $project->fresh()->activity->toArray() );
    }

    /** @test */
    public function incompleting_a_new_task_records_project_activity()
    {
        $project = ProjectFactory::withTasks(1)->create();

        $this->actingAs($project->owner)->patch($project->tasks->first()->path(), [
            "body"      =>  "foobar",
            "completed" =>  true
        ]);

        $this->actingAs($project->owner)->patch($project->tasks->first()->path(), [
            "body"      =>  "foobar",
            "completed" =>  false
        ]);

        $this->assertCount(1, $project->activity);
        $this->assertCount(4, $project->tasks->first()->activity);
        $this->assertEquals('incompleted_task', $project->tasks->first()->activity->last()->description);

        // dd( $project->fresh()->activity->toArray() );
    }

    /** @test */
    public function deleting_a_new_task_records_project_activity()
    {
        $this->withoutExceptionHandling();
        
        $project = ProjectFactory::withTasks(1)->create();

        $this->actingAs($project->owner)->delete($project->tasks->first()->path());

        $this->assertCount(1, $project->activity);
        $this->assertCount(2, $project->tasks->first()->activity);
        $this->assertEquals('deleted_task', $project->tasks->first()->activity->last()->description);
        // dd( $project->fresh()->activity->toArray() );
    }
}
