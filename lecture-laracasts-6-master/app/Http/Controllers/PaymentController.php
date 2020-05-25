<?php

namespace App\Http\Controllers;

use App\Events\ProductPurchasedEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use App\Notifications\PaymentReceived;

class PaymentController extends Controller
{
    public function index()
    {
        return view('payment.index');
    }

    public function notify()
    {
        \Auth::loginUsingId(7);
        // Notification::send(request()->user(), new PaymentReceived());
        // request()->user()->notify( new PaymentReceived() );
        request()->user()->notify( new PaymentReceived(900) );
        return redirect("/payment/create");
    }

    public function list()
    {
        // $noti = \Auth::check() ? \Auth::user()->notifications : null;
        // $noti = \Auth::check() ? \Auth::user()->unreadNotifications : null;
        $noti2 = \Auth::check() ? \Auth::user()->notifications->where('read_at', '<>', null) : null;
        // $noti->markAsRead();
        $noti = \Auth::check() ? tap(\Auth::user()->unreadNotifications)->markAsRead() : null;
        return view('payment.list', compact('noti','noti2'));
    }

    public function create ()
    {
        return view('payment.create');
    }

    public function store()
    {
        ProductPurchasedEvent::dispatch("toy");
    }
}
