<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Customer extends Model
{
    use HasFactory, HasApiTokens;

    public $table = 'ref_customer';
    protected $primaryKey = 'C_ID';
    // protected $keyType = 'double';
    public $timestamps = false;

    // protected $fillable = ['custEmail, custPassword, custNama'];
    protected $guarded = ['C_ID'];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
