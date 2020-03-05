<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    /**
    * Run the migrations.
    */
    'up' => function (Builder $schema) {
        if ($schema->hasTable('post_edit_histories_archive')) {
            return;
        }

        $schema->create('post_edit_histories_archive', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('post_id')->unsigned();
            $table->binary('contents')->nullable();
            $table->foreign('post_id')->references('id')->on('posts')->onDelete('cascade')->onUpdate('cascade');
        });
    },

    /**
    * Reverse the migrations.
    */
    'down' => function (Builder $schema) {
        $schema->dropIfExists('post_edit_histories_archive');
    },
];
