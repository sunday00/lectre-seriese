<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-page theme-light text-default">
    <div id="app">
        <nav class="bg-header">
            <div class="container mx-auto">
                <div class="flex justify-between items-center py-4">
                    <h1>
                        <a class="navbar-brand" href="{{ url('/') }}">
                            <img src="/images/logo.svg" alt="birdboard" width="50px">
                            {{ config('app.name', 'Laravel') }}
                        </a>
                    </h1>
                    {{-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                        <span class="navbar-toggler-icon"></span>
                    </button> --}}

                    <div>
                        <!-- Right Side Of Navbar -->
                        <div class="navbar-nav ml-auto flex">
                            <!-- Authentication Links -->
                            @guest
                                <a class="nav-link mr-3" href="{{ route('login') }}">{{ __('Login') }}</a> 
                                @if (Route::has('register'))
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                @endif
                            @else
                                <theme-swicher></theme-swicher>

                                <dropdown align="right" width="100%">
                                    <template v-slot:trigger>
                                        <button id="navbar"
                                        class="nav-link flex items-center mr-4">
                                           <img src="{{Auth::user()->avatar()}}" alt="{{ Auth::user()->name }}'s avatar'" class="inline rounded-full w-10 mr-2" />
                                           {{ Auth::user()->name }} <span class="caret"></span>
                                       </button>
                                    </template>

                                    <div class="block text-right flex items-center">
                                        <a class="text-default hover:underline px-4 w-full" href="{{ route('logout') }}"
                                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </dropdown>

                            @endguest
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main class="container mx-auto py-4">
            @yield('content')
        </main>
    </div>

    <footer class="footer">
        <p>Icon, logo made by Pixel perfect from <a href="http://www.flaticon.com/" target="_blank">www.flaticon.com</a></p>
        <p>Some SVG Icons from <a href="https://fontawesome.com/license/free">Fontawsome Lisenes</a></p>   
    </footer>
</body>
</html>
