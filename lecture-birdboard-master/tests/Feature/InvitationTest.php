<?php

namespace Tests\Feature;

use Facades\Tests\Setup\ProjectFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\User;
use App\Project;
use Exception;

class InvitationTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function a_project_can_invite_an_user()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();
        $project = ProjectFactory::ownedBy($user)->create();
        $beAMember = factory(User::class)->create();
        $this->actingAs($project->owner)->post($project->path() . "/invitations", [
            'email' => $beAMember->email
        ])->assertRedirect($project->path());

        $this->assertTrue($project->members->contains($beAMember));
    }

    /** @test */
    public function the_invited_email_must_be_valid()
    {
        // $this->withoutExceptionHandling();
        $user = $this->signIn();
        $project = ProjectFactory::ownedBy($user)->create();
        $beAMember = factory(User::class)->create();
        
        // try {
        //     $this->actingAs($project->owner)->post($project->path() . "/invitations", [
        //         'email' => $this->faker->email()
        //     ]);
        // } catch (Exception $e){
        //     $this->assertSame(  $e->getMessage(), "The given data was invalid." );
        // }
        
        $this->actingAs($project->owner)->post($project->path() . "/invitations", [
            'email' => $this->faker->email()
        ])->assertSessionHasErrors([
            'email' => 'This is not a member'
        ], null, 'invitations');

        $this->actingAs($project->owner)->post($project->path() . "/invitations", [
            'email' => $beAMember->email
        ])->assertSessionDoesntHaveErrors();
    }

    /** @test */
    public function only_owner_can_invite()
    {
        // $this->withoutExceptionHandling();
        $user = factory(User::class)->create();
        $project = ProjectFactory::create();

        $this->actingAs($user)->post($project->path() . "/invitations", [
            'email' => $user->email
        ])->assertStatus(500);

        $project->invite( $user );
        $user2 = factory(User::class)->create();

        $this->actingAs($user)->post($project->path() . "/invitations", [
            'email' => $user2->email
        ])->assertStatus(500);
    }

    /** @test */
    public function only_owner_can_invite_card()
    {
        // $this->withoutExceptionHandling();
        $user = factory(User::class)->create();
        $project = ProjectFactory::create();

        $project->invite($user);

        $this->actingAs($project->owner)
            ->get($project->path())
            ->assertStatus(200)
            ->assertSee("<form action=\"{$project->path()}/invitations\"");
        
        $this->actingAs($user)
            ->get($project->path())
            ->assertStatus(200)
            ->assertDontSee("<form action=\"{$project->path()}/invitations\"");
    }


    /** @test */
    public function a_project_can_be_updated_by_member_user()
    {
        $project = ProjectFactory::create();

        // $anotherUser = factory(User::class)->create();
        $project->invite($anotherUser = factory(User::class)->create());

        $this->signIn($anotherUser);
        $this->post(action('ProjectsTaskController@store', $project), $task = [
            'body'  =>  'Foo Task'
        ]);

        $this->assertDatabaseHas('tasks', $task);
    }
}
