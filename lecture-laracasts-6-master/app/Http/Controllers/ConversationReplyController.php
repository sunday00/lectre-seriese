<?php

namespace App\Http\Controllers;

use App\ConversationReply;
use Illuminate\Http\Request;

class ConversationReplyController extends Controller
{
    private $conversationReply;

    public function __construct(ConversationReply $conversationReply) {
        $this->conversationReply = $conversationReply;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        $reply = $this->conversationReply->find(request('reply'));

        // $this->authorize('update-conversation', $reply->conversation);
        $this->authorize($reply->conversation);
        $reply->conversation->best_reply_id = $reply->id;
        $reply->conversation->save();

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ConversationReply  $conversationReply
     * @return \Illuminate\Http\Response
     */
    public function show(ConversationReply $conversationReply)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ConversationReply  $conversationReply
     * @return \Illuminate\Http\Response
     */
    public function edit(ConversationReply $conversationReply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ConversationReply  $conversationReply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ConversationReply $conversationReply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ConversationReply  $conversationReply
     * @return \Illuminate\Http\Response
     */
    public function bestReply()
    {
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ConversationReply  $conversationReply
     * @return \Illuminate\Http\Response
     */
    public function destroy(ConversationReply $conversationReply)
    {
        //
    }
}
