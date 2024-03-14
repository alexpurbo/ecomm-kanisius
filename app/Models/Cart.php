<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Cart extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = 'tb_cart';
    protected $primaryKey = 'cart_id';
    public $timestamps = false;

    protected $fillable = ['cart_customer', 'cart_product', 'cart_amount', 'cart_price'];
}
