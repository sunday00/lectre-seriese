<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Project;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function avatar ()
    {
        $hash = md5($this->email);
        $default = config("app.env") === "production" ? config("app.url")."/images/defaultAvatar.png" : "http://laravel-birdboard.grayfield.net/images/defaultAvatar.png";
        return "https://gravatar.com/avatar/{$hash}?d={$default}";
    }

    public function projects()
    {
        return $this->hasMany(Project::class, "owner_id", "id")->latest("updated_at");
    }

    public function accessibleProjects()
    {
        return Project::where('owner_id', $this->id)
            ->orWhereHas('members', function($q){
                $q->where('user_id', $this->id);
            })->get();
    }
}
