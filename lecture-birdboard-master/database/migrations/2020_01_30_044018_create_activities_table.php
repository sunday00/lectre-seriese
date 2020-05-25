<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('project_id');
            $table->nullableMorphs('subject');
            $table->string("description");
            $table->string("changes")->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references("id")->on("users")->onDelete('cascade');
            $table->foreign('project_id')->references("id")->on("projects")->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activities', function (Blueprint $table) {
            $table->dropForeign("activities_user_id_foreign");
            $table->dropForeign("activities_project_id_foreign");
        });
        Schema::dropIfExists('activities');
    }
}
