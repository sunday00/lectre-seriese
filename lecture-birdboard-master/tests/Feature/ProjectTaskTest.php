<?php

namespace Tests\Feature;

use App\Project;
use Tests\TestCase;
use Facades\Tests\Setup\ProjectFactory;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTaskTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    
    /** @test */
    public function a_project_can_have_task ()
    {
        // $this->withoutExceptionHandling();

        // $this->signIn();

        // $project = factory(Project::class)->create(['owner_id' => auth()->id()]);
        // $project = auth()->user()->projects()->create( factory(Project::class)->raw() );

        $project = ProjectFactory::create();

        $this->actingAs($project->owner)->post($project->path().'/tasks', ['body' => 'test task']);

        $this->get($project->path())->assertSee('test task');
    }

    /** @test */
    public function a_task_can_be_updated()
    {
        // $this->withoutExceptionHandling();

        // $this->signIn();

        // $project = auth()->user()->projects()->create( factory(Project::class)->raw() );

        // $task = $project->addTask('test task');

        /*
        $project = app(ProjectFactory::class)
            // ->ownedBy($this->signIn())
            ->withTasks(1)
            ->create();
        */

        $project = ProjectFactory::withTasks(1)->create();

        $this->actingAs($project->owner)
            ->patch($project->tasks->first()->path(), [
           'body'  => 'changed',
        ]);

        $this->assertDatabaseHas('tasks', [
            'body'  => 'changed',
         ]);
    }

    /** @test */
    public function a_task_can_be_completed()
    {
        $project = ProjectFactory::withTasks(1)->create();

        $this->actingAs($project->owner)
            ->patch($project->tasks->first()->path(), [
           'body'  => 'changed',
           'completed' => true
        ]);

        $this->assertDatabaseHas('tasks', [
            'body'  => 'changed',
            'completed' => true
         ]);
    }

    /** @test */
    public function a_task_can_be_incompleted()
    {
        $this->withoutExceptionHandling();
        $project = ProjectFactory::withTasks(1)->create();

        $this->actingAs($project->owner)
            ->patch($project->tasks->first()->path(), [
           'body'  => 'changed',
           'completed' => false
        ]);

        $this->assertDatabaseHas('tasks', [
            'body'  => 'changed',
            'completed' => false
         ]);
    }

    /** @test */
    public function a_task_can_be_updated_by_only_owner()
    {
        $this->signIn();
        // $project = factory(Project::class)->create();
        // $task = $project->addTask('test task');
        $project = ProjectFactory::withTasks(1)->create();

        $this->patch($project->tasks->first()->path(), [
                'body'  => 'changed',
            ])->assertStatus(500);

        $this->assertDatabaseMissing('tasks', [
            'body'  => 'changed',
        ]);
    }

    /** @test */
    public function only_the_owner_of_a_project_may_add_task()
    {
        $this->signIn();
        $project = factory('App\Project')->create();
        $this->post( $project->path() . '/tasks', ['body' => 'test task'] )
            ->assertStatus(500);

        $this->assertDatabaseMissing('tasks', ['body' => 'test task']);
    }

    /** @test */
    public function a_task_requires_body()
    {
        // $this->signIn();
        // $project = auth()->user()->projects()->create( factory(Project::class)->raw() );

        $project = ProjectFactory::create();

        $attributes = factory("App\Task")->raw(["body" => ""]);

        $this->actingAs($project->owner)
            ->post($project->path().'/tasks', $attributes)
            ->assertSessionHasErrors('body');
    }
    
}
