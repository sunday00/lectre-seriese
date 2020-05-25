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

Route::get('/try', function () {
    return view('try');
});

Route::get('/ex1/{vue_route}', function () {
    return view('message');
});

Route::get('/ex2/{vue_route}', function () {
    return view('message');
});

Route::get('/todo/{vue_route}', function () {
    return view('todo');
});
Route::get('/todo/todo/{filter}', function () {
    return view('todo');
});
