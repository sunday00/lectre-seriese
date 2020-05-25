<?php

namespace App;

use InvalidArgumentException;

// use Illuminate\Database\Eloquent\Model;

class Email
{
    public $address;
    public function __construct(String $address) {

        if(! filter_var($address, FILTER_VALIDATE_EMAIL) ){
            throw new InvalidArgumentException('Email address is not valid');
        }

        $this->address = $address;
    }

    public function domain()
    {
        return \Str::of($this->address)->after('@')->__toString();
    }
}
