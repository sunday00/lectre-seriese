<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\NexmoMessage;

class PaymentReceived extends Notification
{
    use Queueable;
    protected $amount;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(int $amount)
    {
        $this->amount = $amount;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database', 'nexmo'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    //->subject("subject default basically class name")
                    ->greeting("NicePay")
                    ->line('hello notify')
                    ->action('Go site', url('/'))
                    ->line('Thank you for using our application!')
                    ->line('Bye');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'amount' => $this->amount
        ];
    }

    public function toNexmo($notifiable)
    {
        return (new NexmoMessage)
            ->content('Your SMS message content');
    }
}
