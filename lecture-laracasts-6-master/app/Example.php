<?php

namespace App;

class Example
{
    protected $foo, $dep;

    public function go()
    {
        dd("in works");
    }

    public function __construct($foo, Dep $dep)
    {
        $this->foo = $foo;
        $this->dep = $dep;
    }
}