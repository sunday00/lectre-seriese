<?php

namespace App;

use App\Tweety;
use App\Like;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable, Followable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'name', 'email', 'password',
    // ];
    protected $guarded = [];

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

    public function routeNotificationForNexmo($notification)
    {
        // return $this->phone_number;
        return "1065505256";
    }
    
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

    public function assignRole($role)
    {
        if( is_string($role) ){
            $role = Role::whereName($role)->firstOrFail();
        }

        $this->roles()->sync($role, false);
    }

    public function abilities()
    {
        return $this->roles->map
            ->abilities->flatten()->pluck('name')->unique();
    }

    public function getAvatarAttribute($val)
    {
        // return "https://i.pravatar.cc/50?u={$this->email}";
        // return $val ? asset($val) : "https://i.pravatar.cc/50?u={$this->email}";
        return asset($val ?: '/images/default-avatar'.rand(1,3).'.svg');
    }

    public function getBigAvatarAttribute($val)
    {
        // return "https://i.pravatar.cc/140?u={$this->email}";
        // return $val ? $this->avatar : "https://i.pravatar.cc/140?u={$this->email}";
        return $this->avatar;
    }

    public function setPasswordAttribute($val)
    {
        $this->attributes['password'] = bcrypt($val);
    }

    public function timeline()
    {
        // return Tweety::latest()->get();
        // return Tweety::where('user_id', $this->id)->latest()->get();
        return Tweety::withLikes()
            ->whereIn('user_id', $this->followings()->pluck('id'))
            ->orWhere('user_id', $this->id)
            ->latest();
    }

    public function tweets()
    {
        return $this->hasMany(Tweety::class)->latest();
    }

    public function getRouteKeyName()
    {
        return 'username';
    }

    public function resolveRouteBinding($value)
    {
        // return $this->where($this->getRouteKeyName(), str_replace('-', ' ', $value))->first();
        return $this->where($this->getRouteKeyName(), $value)->first();
    }

    public function profile($action = 'show')
    {
        // return route("tweety.profiles.{$action}", str_replace(' ', '-', $this->name));
        return route("tweety.profiles.{$action}", $this->username);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
