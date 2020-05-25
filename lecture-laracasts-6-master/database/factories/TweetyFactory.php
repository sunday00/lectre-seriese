<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tweety;
use App\User;
use Faker\Generator as Faker;

$factory->define(Tweety::class, function (Faker $faker) {
    return [
        'user_id'   => User::all()->random()->id,
        'body'      => $faker->paragraph(rand(1,3))
    ];
});
