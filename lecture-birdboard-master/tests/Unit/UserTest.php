<?php

namespace Tests\Unit;

use Facades\Tests\Setup\ProjectFactory;
use Tests\TestCase;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class UserTest extends TestCase
{
    use RefreshDatabase, WithFaker;
    
    /** @test */
    public function has_projects()
    {
        $user = factory("App\User")->create();
        $this->assertInstanceOf(Collection::class, $user->projects);
    }

    /** @test */
    public function has_accessible_projects()
    {
        $user = $this->signIn();
        ProjectFactory::ownedBy($user)->create();
        $this->assertCount(1, $user->accessibleProjects());

        $user2 = factory("App\User")->create();
        $project2 = tap(ProjectFactory::ownedBy($user2)->create())->invite($user);

        $this->assertCount(1, $project2->members()->get());
        $this->assertCount(2, $user->accessibleProjects());

        $user3 = factory("App\User")->create();
        $project3 = tap(ProjectFactory::ownedBy($user3)->create())->invite($user2);

        // dd($user2->id, $project3->members->pluck('id'));

        $this->assertCount(1, $project3->members()->get());
        $this->assertCount(2, $user->accessibleProjects());

        $project3->invite($user);
        // dd($user->id, $project3->members->pluck('id'));

        $this->assertCount(2, $project3->members()->get());
        $this->assertCount(3, $user->accessibleProjects());
    }
}
