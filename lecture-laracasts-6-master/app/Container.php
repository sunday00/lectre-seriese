<?php

namespace App;

class Container
{
    private $bindings = [];

    public function bind($key, $value)
    {
        $this->bindings[$key] = $value;
    }

    public function resolve($key){
        if ( isset( $this->bindings[$key] ) ){
            // return $this->bindings[$key];
            return call_user_func( $this->bindings[$key] );
        }
    }
}