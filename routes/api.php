<?php

use App\Http\Controllers\AuthController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::apiResource('kel-kategori', KelKategoryController::class);
Route::get('testQuery', [KelKategoryController::class, 'testQuery']);
Route::get('new-products', [ProductController::class, 'getNewProducts']);
route::get('benda-rohani', [ProductController::class, 'getSpiritualProducts']);
route::get('produk-pilihan', [ProductController::class, 'getProdukPilihan']);
route::get('product/{id}', [ProductController::class, 'show']);

route::post('signup', [AuthController::class, 'signup']);
route::post('login', [AuthController::class, 'login']);
