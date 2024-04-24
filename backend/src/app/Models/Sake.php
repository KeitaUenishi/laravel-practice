<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sake extends Model
{
    use HasFactory, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'id',
        'name',
        'image_url',
        'param1_val',
        'param2_val',
        'param3_val',
        'param4_val',
        'param5_val',
        'category_id',
        'user_id',
        'updated_at',
    ];
}
