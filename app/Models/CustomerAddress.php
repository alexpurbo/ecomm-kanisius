<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class CustomerAddress extends Model
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $table = 'ref_alamat_online';
    protected $primaryKey = 'alamat_id';
    public $timestamps = false;

    protected $fillable = ['alamat_customer', 'alamat_provinsi', 'alamat_city', 'alamat_lengkap', 'alamat_hp', 'alamat_penerima', 'alamat_subdistrict', 'alamat_tipe'];
}
