<?php

use App\Http\Controllers\KelKategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('kel-kategori', KelKategoryController::class);
Route::get('testQuery', [KelKategoryController::class, 'testQuery']);
Route::get('new-products', [ProductController::class, 'getNewProducts']);
route::get('benda-rohani', [ProductController::class, 'getSpiritualProducts']);
route::get('product/{id}', [ProductController::class, 'show']);
