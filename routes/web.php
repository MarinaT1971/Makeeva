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
    return Inertia::render('AdminPages/sistem_404');
});

Route::get('/sistem_error', function () {
    return Inertia::render('AdminPages/sistem_error');
});

Route::get('/sistem_success', function () {
    return Inertia::render('AdminPages/sistem_success');
});

Route::get('/payment', function () {
    return Inertia::render('AdminPages/payment');
});

Route::get('/admin_course', function () {
    return Inertia::render('AdminPages/admin_course');
});

Route::get('/admin_lesson', function () {
    return Inertia::render('AdminPages/admin_lesson');
});

Route::get('/admin_payment', function () {
    return Inertia::render('AdminPages/admin_payment');
});

Route::get('/admin_sertificat', function () {
    return Inertia::render('AdminPages/admin_sertificat');
});

Route::get('/legalCourse', function () {
    return Inertia::render('legalCourse');
});

Route::get('/brainBlast', function () {
    return Inertia::render('brainBlast');
});




require __DIR__.'/auth.php';
