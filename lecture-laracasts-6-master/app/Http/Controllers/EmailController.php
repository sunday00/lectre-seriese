<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send()
    {
        // Mail::raw('plain text message', function ($message) {
        //     $message->to(request('email'))
        //         ->subject('hello email');
        // });

        Mail::to(request('email'))
            ->send( new \App\Mail\Contact() );

        return redirect('/contact')->with('message', 'Sent');
    }
}
