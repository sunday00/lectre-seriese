<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use App\User;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'user_id'   =>  User::all()->random()->id,
        'title'     =>  $faker->sentence,
        'excerpt'   =>  $faker->sentence,
        'body'      =>  $faker->paragraph,
    ];
});
