<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Noti extends Component
{
    public $description;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(String $description)
    {
        $this->description = $description;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.noti');
    }
}
