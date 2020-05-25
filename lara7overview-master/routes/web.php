<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/string', function(){
    echo Str::of('hello world');
    echo "<br />";
    echo Str::of('hello world')->after('hello ');
    echo "<br />";
    echo Str::of('hello world')->title();
    echo "<br />";
    echo Str::of('hello world')->title()->start('a ');
    echo "<br />";
    echo Str::of("hello world")->title()->start('a ')->slug('_+_');
    echo "<br />";
    echo Str::of("hello world")->replace('hello', 'bye');
});

use App\Post;
use App\User;

Route::get('/posts/{post:slug}', function(Post $post){
    return $post;
});

// Route::get('/users/{user}/posts/{post}', function(User $user, Post $post){
Route::get('/users/{user}/posts/{post:id}', function(User $user, Post $post){
    // return $user->posts()->findOrFail($post->id);
    return $post;
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
