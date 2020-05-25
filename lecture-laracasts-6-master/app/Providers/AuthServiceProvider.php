<?php

namespace App\Providers;

use App\Conversation;
use App\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    private $skipBoot = [
        'view', 'viewAny', 'create', 'update',
        'delete', 'restore', 'forceDelete'
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Gate::define('update-conversation', function (User $user, Conversation $conversation) {
        //     return $conversation->user->is($user);
        // });

        // Gate::before(function (User $user) {
        //     // if($user->id === 31) {
        //     //     return true;
        //     // }
        // });

        Gate::before(function(User $user, String $ability){
            if (in_array($ability, $this->skipBoot)) return;
            return $user->abilities()->contains($ability);
        });
    }
}
