<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('article_tag', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('article_id');
            $table->unsignedBigInteger('tag_id');
            $table->timestamps();

            $table->unique(['article_id', 'tag_id']);

            $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('article_tag', function (Blueprint $table) {
            $table->dropForeign('ARTICLE_TAG_ARTICLE_ID_FK');
            $table->dropForeign('ARTICLE_TAG_TAG_ID_FK');
        });
        Schema::dropIfExists('article_tag');
        Schema::dropIfExists('tags');
    }
}
