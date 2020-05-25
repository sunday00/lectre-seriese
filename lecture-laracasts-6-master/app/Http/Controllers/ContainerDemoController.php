<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContainerDemoController extends Controller
{
    public function index()
    {
        $con = new \App\Container();

        $con->bind('example', function(){
            return new \App\Example();
        });

        $ex = $con->resolve('example');

        $ex->go();
    }

    public function ser()
    {
        // app()->bind('example', function(){
        //     $foo = config('services.foo');
        //     return new \App\Example($foo);
        // });
        
        // $ex = resolve('example');
        $ex = resolve(\App\Example::class, ['foo' => config('services.foo')]);
        ddd($ex);
    }
}
