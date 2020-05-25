<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tweety;

class TweetyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tweety.home', [
            // 'tweeties'  => Tweety::latest()->get()
            'tweeties'  => auth()->user()->timeline()->paginate(30)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Tweety $tweety)
    {
        $attr = request()->validate([
            'body'      =>  'required|max:255'
        ]);

        $tweety->create(\Arr::add(
            $attr,
            'user_id', auth()->id()
        ));

        return redirect()->route('tweety.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tweety  $tweety
     * @return \Illuminate\Http\Response
     */
    public function show(Tweety $tweety)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tweety  $tweety
     * @return \Illuminate\Http\Response
     */
    public function edit(Tweety $tweety)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tweety  $tweety
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tweety $tweety)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tweety  $tweety
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tweety $tweety)
    {
        //
    }
}
