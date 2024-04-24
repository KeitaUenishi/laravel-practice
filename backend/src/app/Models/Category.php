<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    public $timestamps = false;

    protected $fillable = [
        'id',
        'name',
        'param1_name',
        'param2_name',
        'param3_name',
        'param4_name',
        'param5_name',
    ];
}
