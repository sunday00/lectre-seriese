<?php

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

Route::get('/about', function () {
    return view('about', [
        'articles' => App\Article::take(3)->latest()->get()
    ]);
});

Route::resource('/articles', 'ArticleController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/receiver', function () {
    dd(request('test'));
});

Route::get('/containerDemo', [
    'as'    =>  'conDemo',
    'uses'  =>  'ContainerDemoController@index'
]);

Route::get('/serviceContainerDemo', [
    'as'    =>  'sConDemo',
    'uses'  =>  'ContainerDemoController@ser'
]);

Route::get('/reolving', fn(App\Example $ex) => ddd($ex));
Route::get('/reolving2/{id}', fn($id) :int => $id);

Route::get('/page', 'PageController@home');

Route::get('checkUsingFile', [
    'uses'  =>  'FindFileController@index'
]);

Route::get('/contact', function(){
    return view('contact');
});

Route::post('/contact', [
    'uses'  =>  'EmailController@send'
]);

Route::get('/payment/create', [
    'uses'  =>  'PaymentController@create'
]);

Route::post('/payment/store', [
    'uses'  =>  'PaymentController@store'
]);


Route::post('/payment/notify', [
    'uses'  =>  'PaymentController@notify'
]);

Route::get('/payment/list', [
    'uses'  =>  'PaymentController@list'
]);

Route::get("/taptap", function(){
    $coll = collect(['a'=> 1,'b' => 2,'c' => 3]);
    dd(tap($coll)->push(['d' => 4]), $coll);
});

Route::get('/conversations', 'ConversationsController@index');
Route::get('/conversations/{conversation}', 'ConversationsController@show')
    ->middleware('can:view,conversation');
Route::patch('/conversations/best-reply', 'ConversationReplyController@store');

Route::prefix('/tweety')->name('tweety.')->group(function(){
    Route::middleware('auth')->group(function(){
        Route::get('/', [
            'uses'  => 'TweetyController@index',
            'as'    => 'index'
        ]);
        Route::post('/', [
            'uses'  => 'TweetyController@store',
            'as'    => 'store'
        ]);
    });
    
    Route::prefix('/profiles')->name('profiles.')->group(function () {
        Route::get('/{user}', [
            'uses'  => 'ProfileController@show',
            'as'    => 'show'
        ])->middleware('auth');

        Route::get('/{user}/edit', [
            'uses'  => 'ProfileController@edit',
            'as'    => 'edit'
        ])->middleware('can:update,user');
        Route::patch('/{user}/update', [
            'uses'  => 'ProfileController@update',
            'as'    => 'update'
        ])->middleware('can:update,user');

        Route::post('/{user}/follow', [
            'uses'  => 'FollowController@store',
            'as'    => 'follow'
        ]);
    });

    Route::prefix('/explore')->name('explore.')->middleware('auth')->group(function(){
        Route::get('/', [
            'uses'  => 'ExploreController',
            'as'    => 'index'
        ]);
    });

    Route::prefix('/prefer')->name('prefer.')->middleware('auth')->group(function(){
        Route::patch('/like/{tweety}', [
            'uses'  => 'TweetyLikesController@like',
            'as'    => 'like'
        ]);
        Route::delete('/like/{tweety}', [
            'uses'  => 'TweetyLikesController@dislike',
            'as'    => 'dislike'
        ]);
    });
});
