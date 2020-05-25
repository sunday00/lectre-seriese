<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Status;
use Faker\Generator as Faker;

use App\User;

$factory->define(Status::class, function (Faker $faker) {
    return [
        'user_id' => User::all()->random()->id,
        'body' => $faker->sentence
    ];
});
