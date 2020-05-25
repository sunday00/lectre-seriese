@component('components.master')
    <section>
        <div class="lg:flex lg:justify-between">
            <div class="lg:w-32">
                @include('tweety._sidebar-links')
            </div>

            <div class="lg:flex-1 lg:mx-10" style="max-width: 700px;">
                {{-- @yield('main-content') --}}
                {{ $slot }}
            </div>

            <div class="lg:w-1/6">
                @include('tweety._friends-lists')
            </div>
        </div>
    </section>
@endcomponent