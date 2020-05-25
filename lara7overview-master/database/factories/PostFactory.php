<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    $titleAndSlug = $faker->sentence();
    return [
        "user_id"    => (new App\User)->all()->random()->id,
        "title"      => $titleAndSlug,
        "slug"       => $titleAndSlug,
        "body"       => $faker->paragraph(),
        "created_at" => $faker->dateTime(),
        "updated_at" => $faker->dateTime()
    ];
});
