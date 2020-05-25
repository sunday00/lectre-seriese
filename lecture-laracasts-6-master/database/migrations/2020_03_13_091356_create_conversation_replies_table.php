<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConversationRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversation_replies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('body');
            $table->unsignedBigInteger('conversation_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('conversation_id')->references('id')->on('conversations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('conversation_replies', function (Blueprint $table) {
            $table->dropForeign('CONVERSATIO_REPLIE_USE_ID_FK');
            $table->dropForeign('CONVERSAT_REPL_CONVERSAT_ID_FK');
        });
        Schema::dropIfExists('conversation_replies');
    }
}
