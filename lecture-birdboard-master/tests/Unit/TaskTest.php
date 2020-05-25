<?php

namespace Tests\Unit;

use App\Task;
// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class TaskTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    
    /** @test */
    public function belongs_to_project()
    {
        $task = factory(Task::class)->create();
        $this->assertInstanceOf(\App\Project::class, $task->project);
    }

    /** @test */
    public function has_a_path()
    {
        $task = factory(Task::class)->create();
        $this->assertEquals('/projects/' . $task->project->id . '/tasks/' . $task->id, $task->path());
    }

    /** @test */
    public function can_be_completed()
    {
        $task = factory(Task::class)->create();

        $this->assertFalse($task->completed);
        $task->complete();
        $this->assertTrue($task->fresh()->completed);
    }

    /** @test */
    public function can_be_incompleted()
    {
        $task = factory(Task::class)->create(['completed' => true]);
        $this->assertTrue($task->completed);
        $task->incomplete();
        $this->assertFalse($task->fresh()->completed);
    }
}
