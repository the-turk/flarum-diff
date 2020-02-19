<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    /**
    * Run the migrations.
    */
    'up' => function (Builder $schema) {

        // JUST FOR 0.1.0-beta.5
        // DO NOT FORGET TO REMOVE ON FUTURE RELEASES
        $schema->dropIfExists('post_edit_histories');

        /* COMMENTED OUT FOR FUTURE RELEASES
        if ($schema->hasTable('post_edit_histories')) {
            return;
        }
        */

        $schema->create('post_edit_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id')->unsigned();
            $table->unsignedInteger('actor_id')->unsigned()->nullable();
            $table->unsignedInteger('revision')->unsigned();
            $table->dateTime('created_at');
            $table->text('diff');
            $table->unsignedInteger('deleted_user_id')->unsigned()->nullable();
            $table->dateTime('deleted_at')->nullable();
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('actor_id')->references('id')->on('users')->onDelete('set null')->onUpdate('set null');
            $table->foreign('deleted_user_id')->references('id')->on('users')->onDelete('set null')->onUpdate('set null');
        });
    },

    /**
    * Reverse the migrations.
    */
    'down' => function (Builder $schema) {
        $schema->dropIfExists('post_edit_histories');
    },
];
