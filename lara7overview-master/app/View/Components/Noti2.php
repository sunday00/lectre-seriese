<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Noti2 extends Component
{

    public $type;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($type)
    {
        $this->type = $type;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return <<<'blade'
<div {{ $attributes->merge(['class' => $type === 'success' ? 'blue' : 'red']) }} >
    Order your soul. Reduce your wants. - Augustine
</div>
blade;
    }
}
