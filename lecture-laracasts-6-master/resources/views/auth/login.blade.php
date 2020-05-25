@component('components.master')
<div class="container mx-auto flex justify-center">
    <div class="px-6 py-4 bg-gray-300 rounded-lg">
                <div class="font-bold text-lg mb-4">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="mb-6">
                            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">email</label>
                            <input class="border border-gray-400 p-2 w-full" type="email" name="email" id="email" required autocomplete="email" value="{{ old('email') }}">
                            @error('email')
                                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="mb-6">
                            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">password</label>
                            <input class="border border-gray-400 p-2 w-full" type="password" name="password" id="password" required>
                            @error('password')
                                <p class="text-red-500 text-xs mt-2">{{ $message }}</p>
                            @enderror
                        </div>

                        <div class="form-group row mb-6">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-6">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary px-6 py-4 rounded text-sm uppercase bg-blue-400 text-white">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
    </div>
</div>
@endcomponent
