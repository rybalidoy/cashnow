<?php

use Illuminate\Support\Facades\Route;

if(env("APP_ENV") === 'local') {
    sleep(1);
}


Route::any('/{any}', function() {
    return view('app');
})->where('any','.*')->name('/');