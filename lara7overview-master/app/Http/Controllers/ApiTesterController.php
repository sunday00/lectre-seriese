<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiTesterController extends Controller
{
    public function __invoke()
    {
        // return collect(Http::get('https://reqres.in/api/users')
        //     ->json()['data']);

        // return Http::post('https://reqres.in/api/users', [
        //     'name'  => 'JK',
        //     'job'   => 'student'
        // ])
        // // ->status()
        // // ->successful()
        // // ->body()
        // ->json()
        // ;

        // return Http::get('https://api.github.com/users/sunday00')
        //     ->json();

        // return Http::withToken('bd6a6b7064bc2d85c246b99593274b18f597b7aa')
        //     ->get('https://api.github.com')
        //     ->json();

        // dd(Http::get('https://api.github.com/users/sunday00'));


        // return Http::fake( function($request){ 
            return Http::response(200);
        // });

    }
}
