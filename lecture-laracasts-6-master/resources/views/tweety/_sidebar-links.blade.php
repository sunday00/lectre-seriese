<ul>
    <li>
        <a href="/tweety" class="font-bold text-lg mb-4 block">Home</a>
    </li>
    <li>
        <a href="{{ route('tweety.explore.index') }}" class="font-bold text-lg mb-4 block">Explore</a>
    </li>
    <li>
        <a href="#" class="font-bold text-lg mb-4 block">Notification</a>
    </li>
    <li>
        <a href="#" class="font-bold text-lg mb-4 block">Message</a>
    </li>
    <li>
        <a href="#" class="font-bold text-lg mb-4 block">Bookmarks</a>
    </li>
    <li>
        <a href="#" class="font-bold text-lg mb-4 block">Lists</a>
    </li>
    <li>
        <a href="{{route('tweety.profiles.show', auth()->user()->username)}}" class="font-bold text-lg mb-4 block">Profile</a>
    </li>
</ul>