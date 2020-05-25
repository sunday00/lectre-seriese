<?php

namespace App\Listeners;

use App\Events\ProductPurchasedEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;


class SendCoupone
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProductPurchasedEvent $event)
    {
        echo "send coupone";
        echo "<br />";
    }
}
