<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Conversation;
use App\User;
use Faker\Generator as Faker;

$factory->define(Conversation::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'description' => $faker->paragraph(),
        'user_id'   => User::all()->random(1)->first()->id
    ];
});
