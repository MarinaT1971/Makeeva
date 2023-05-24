<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/sistem_404', function () {
    return Inertia::render('sistem_404');
});

Route::get('/sistem_error', function () {
    return Inertia::render('sistem_error');
});

Route::get('/sistem_success', function () {
    return Inertia::render('sistem_success');
});

Route::get('/payment', function () {
    return Inertia::render('payment');
});


require __DIR__.'/auth.php';
