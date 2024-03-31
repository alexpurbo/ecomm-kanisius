<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
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
    Route::apiResource('/cart', CartController::class);
    Route::get('/cartAmount', [CartController::class, 'cartAmount']);
    Route::delete('/cart/destroyAll/{id}', [CartController::class, 'destroyAll']);
});

Route::apiResource('kel-kategori', KelKategoryController::class);
Route::get('testQuery', [KelKategoryController::class, 'testQuery']);
Route::get('new-products', [ProductController::class, 'getNewProducts']);
route::get('benda-rohani', [ProductController::class, 'getSpiritualProducts']);
route::get('produk-pilihan', [ProductController::class, 'getProdukPilihan']);
route::get('product/{id}', [ProductController::class, 'show']);
route::get('getProductByCategory/{id}', [ProductController::class, 'getProductByCategory']);
route::get('productSearch/{id}', [ProductController::class, 'productSearch']);
route::get('productSearchByKeyword/{id}', [ProductController::class, 'productSearchByKeyword']);

route::post('/signup', [AuthController::class, 'signup']);
route::post('/login', [AuthController::class, 'login']);
