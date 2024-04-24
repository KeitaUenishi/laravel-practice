<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();

        Category::create([
            'name' => '日本酒',
            'param1_name' => '甘味',
            'param2_name' => '酸味',
            'param3_name' => '苦味',
            'param4_name' => '辛味',
            'param5_name' => '旨味',
        ]);

        Category::create([
            'name' => 'ビール',
            'param1_name' => '香り',
            'param2_name' => '深み',
            'param3_name' => '苦味',
            'param4_name' => '甘味',
            'param5_name' => '炭酸',
        ]);
    }
}
