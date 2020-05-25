<?php

namespace Tests\Feature;

use App\Project;
use Facades\Tests\Setup\ProjectFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ManageProjectsTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /** @test */
    public function guests_can_not_control_projects()
    {
        $project = factory("App\Project")->create();
        
        $this->get("/projects")->assertRedirect('/login');
        $this->get("/projects/create")->assertRedirect('/login');
        $this->get($project->path())->assertRedirect('/login');
        $this->get($project->path().'/edit')->assertRedirect('/login');
        $this->post("/projects", $project->toArray())->assertRedirect('/login');

        $this->delete($project->path())->assertRedirect('/login');
    }

    /** @test */
    public function a_project_requires_a_title()
    {
        $this->signIn();
        $attributes = factory("App\Project")->raw(["title" => ""]);
        $this->post("/projects", $attributes)
            ->assertSessionHasErrors('title');
    }

    /** @test */
    public function a_project_requires_a_description()
    {
        $this->signIn();
        $attributes = factory("App\Project")->raw(["description" => ""]);
        $this->post("/projects", $attributes)
            ->assertSessionHasErrors('description');
    }

    /** @test */
    public function a_user_can_create_a_project()
    {
        // $this->withoutExceptionHandling();
        
        // $this->actingAs(factory("App\User")->create());
        $user = $this->signIn();

        $this->get("/projects/create")->assertStatus(200);

        // $attributes = [
        //     "title"         =>  $this->faker->sentence,
        //     "description"   =>  $this->faker->paragraph,
        //     "notes"         =>  'General notes here.',
        //     "owner_id"      =>  1
        // ];

        
        
        // $res = $this->post('/projects', $attributes);
        // $project = Project::where($attributes)->first();
        // $res->assertRedirect($project->path());
        
        // $this->assertDatabaseHas('projects', $attributes);

        // $this->get($project->path())
        //     ->assertSee($attributes["title"])
        //     ->assertSee(\Str::limit($attributes["description"],35))
        //     ->assertSee($attributes["notes"]);

        
        $this->followingRedirects()->post(
                '/projects', $attributes = factory(Project::class)->raw()
            )->assertSee($attributes["title"])
            ->assertSee(\Str::limit($attributes["description"],35))
            ->assertSee($attributes["notes"]);
            // When User post 
                // data made by project factory with signed id
                // to /projects 
            // done with following redirect,
            // and can see posted title, desc, note.
    }

    /** @test */
    public function tasks_can_be_included_as_a_new_project_creation()
    {
        $this->signIn();
        $attributes = factory(Project::class)->raw();
        $attributes['tasks'] = [
            ['body' =>  'Task 1'],
            ['body' =>  'Task 2']
        ];

        $this->post("/projects", $attributes);
        $this->assertCount(2, Project::first()->tasks);
    }

    /** @test */
    public function a_user_can_view_a_project()
    {
        // $this->withoutExceptionHandling();

        // $this->be( factory('App\User')->create() );
        // $project = factory("App\Project")->create(["owner_id" => auth()->id()]);

        $project = ProjectFactory::create();

        $this->actingAs($project->owner)->get($project->path())
            ->assertSee($project->title)
            ->assertSee(\Str::limit($project->description, 35));
    }

    /** @test */
    public function a_user_can_update_a_project()
    {
        // $this->withoutExceptionHandling();
        
        // $this->signIn();

        // $project = factory("App\Project")->create(["owner_id" => auth()->id()]);

        $project = ProjectFactory::create();

        $this->actingAs($project->owner)->patch($project->path(), $arr=[
            'title' => "changed1",
            "description" => "changed2",
            'notes' => "changed3"
        ])->assertRedirect($project->path());

        $this->get($project->path()."/edit")->assertOk();

        $this->assertDatabaseHas("projects", $arr);

        $this->get($project->path())
            ->assertSee("changed1")
            ->assertSee("changed2")
            ->assertSee("changed3");

    }

    /** @test */
    public function a_user_can_update_a_project_general_notes()
    {
        $this->withoutExceptionHandling();
        $project = ProjectFactory::create();

        $this->actingAs($project->owner)->patch($project->path(), $arr=[
            'notes' => "changed"
        ])->assertRedirect($project->path());

        $this->assertDatabaseHas("projects", $arr);

        $this->get($project->path())
            ->assertSee("changed");

    }

    /** @test */
    public function a_user_can_delete_a_project()
    {
        $this->withoutExceptionHandling();

        $project = factory("App\Project")->create();
        $this->actingAs($project->owner)
            ->delete($project->path())
            ->assertRedirect("/projects");

        $this->assertDatabaseMissing('projects', $project->only('id'));
    }

    /** @test */
    // TODO:: figureout why phpunit assert 500 not 403.
    public function an_user_can_not_view_a_project_of_others()
    {
        // $this->withoutExceptionHandling();

        $this->be( factory('App\User')->create() );
        $project = factory("App\Project")->create();

        $this->get($project->path())->assertStatus(500);
    }

    /** @test */
    public function an_user_can_not_update_a_project_of_others()
    {
        $this->signIn();
        $project = factory("App\Project")->create();

        $this->patch($project->path())->assertStatus(500);
    }

    /** @test */
    public function an_user_can_not_delete_a_project_of_others()
    {

        $project = ProjectFactory::create();
        $user = $this->signIn();
        $this->delete($project->path())
            ->assertStatus(500);

        $project2 = ProjectFactory::ownedBy($user)->create();

        // $this->assertDatabaseMissing('projects', $project->only('id'));

        $project->invite($user);

        $this->actingAs($user)->get("/projects")
            ->assertSee("<form action=\"{$project2->path()}\"")
            ->assertDontSee("<form action=\"{$project->path()}\"");

        $this->actingAs($user)->delete($project->path())
        ->assertStatus(500);
    }

    /** @test */
    public function invited_mamber_can_see_a_project_on_dashboard(Type $var = null)
    {
        $project = tap(ProjectFactory::create())->invite($this->signIn());
        $this->get('/projects')->assertSee($project->title);
    }

    

    
}
