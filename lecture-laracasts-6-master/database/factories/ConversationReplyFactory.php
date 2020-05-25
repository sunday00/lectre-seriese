<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ConversationReply;
use App\Conversation;
use App\User;
use Faker\Generator as Faker;

$factory->define(ConversationReply::class, function (Faker $faker) {
    return [
        'body'              => $faker->paragraph(),
        'conversation_id'   => Conversation::all()->random(1)->first()->id,
        'user_id'           => User::all()->random(1)->first()->id
    ];
});
