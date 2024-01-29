<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KelKategory extends Model
{
    use HasFactory;

    protected $table = 'ref_kel_kategori';

    protected $fillable = ['katId', 'katNama'];
}
