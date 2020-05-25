<header class="mb-6 ">
    @php
        $arr = ['3493607', '9248817', '6780963', '1199299', '1103088'];
    @endphp
    <img class="rounded-xl mb-2" src="https://source.unsplash.com/collection/{{$arr[rand(0, 4)]}}/1600x600" alt="placeholder image" />    
    <div class="flex justify-between mb-8">
        <div>
            <h2 class="font-bold text-2xl mb-0">{{ $user->name }}</h2>
            <p class="text-sm">Story Started at {{ $user->created_at->diffForHumans() }}</p>
        </div>

        <img class="rounded-full" style="margin-top:-100px; width:150px;" src="{{ $user->bigAvatar }}" alt="me">

        <div class="items-center flex">
            @component('tweety.profiles.__edit-button', ['user' => $user])@endcomponent
            @component('tweety.profiles.__follow-button', ['user' => $user])@endcomponent
        </div>
    </div>
    <div class="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore delectus dolor omnis et nesciunt nisi, impedit ipsam! Debitis a beatae, explicabo iste asperiores architecto numquam minus fugiat nemo quaerat.
    </div>
</header>