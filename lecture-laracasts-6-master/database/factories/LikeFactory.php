<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Tweety;
use App\Like;
use Faker\Generator as Faker;

$factory->define(Like::class, function (Faker $faker) {

    if ( !defined('i1') ){
        define('i1', true);
    }

    $i = '1';

    while( defined('i'.$i) ){
        $i++;
        if( defined('i'.$i) ){
            continue;
        } else {
            define('i'.$i, true);
            break;
        }
    }

    $user_id    = User::all()->random()->id;
    $tweety_id  = Tweety::all()->random()->id;

    $like = Like::where('user_id', $user_id)->where('tweety_id', $tweety_id)->first();
    if ( $like ) $like->delete();

    echo ($i - 1).":".$user_id." / ".$tweety_id."\n";

    return [
        'user_id'   => $user_id,
        'tweety_id' => $tweety_id,
        'liked'     => rand(0, 1)
    ];
    
    
});
