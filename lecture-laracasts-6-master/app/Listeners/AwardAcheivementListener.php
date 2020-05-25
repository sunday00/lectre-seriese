<?php

namespace App\Listeners;

use App\Events\ProductPurchasedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AwardAcheivementListener
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
        echo "Your order about {$event->name} is receipt.";
        echo "<br />";
    }
}
