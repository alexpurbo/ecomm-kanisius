<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    // public $table = 'ref_customer';
    public $table = 'ref_cust_online';
    protected $primaryKey = 'C_ID';
    // protected $keyType = 'double';
    public $timestamps = false;

    // protected $fillable = ['custEmail, custPassword, custNama'];
    // protected $guarded = ['C_ID'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['custID', 'custEmail', 'custPassword', 'custInisial', 'custNama', 'custInstansi', 'custAlamat', 'custPropinsi', 'custKota', 'custKecatamatan', 'custKodepos', 'custTelp', 'custAwal', 'custAkhir'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'custPassword',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAuthPassword()
    {
        return $this->custPassword;
    }
}
