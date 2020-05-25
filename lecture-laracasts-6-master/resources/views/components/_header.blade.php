<header class="container mx-auto flex">
    <a href="/tweety" class="flex-1">
        <img class="w-12 inline-block" src="/images/icon.svg" alt="logo image">
        <h1 class="text-2xl inline-block ml-1 align-middle">Tweety</h1>
    </a>
    @auth
    <form action="/logout" method="POST" class="align-right flex-1 text-right">
        @csrf
        <button class="text-gray-800 rounded py-1 px-2" type="submit">Logout</button>
    </form>
    @endauth
</header>