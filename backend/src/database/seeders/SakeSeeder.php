<?php

namespace Database\Seeders;

use App\Models\Sake;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SakeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Sake::truncate();

        Sake::create([
            'name' => 'test1',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 1,
            'user_id' => 1,
        ]);
        Sake::create([
            'name' => 'test2',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 1,
            'user_id' => 1,
        ]);
        
        Sake::create([
            'name' => 'test3',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 1,
            'user_id' => 1,
        ]);
        Sake::create([
            'name' => 'test4',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 2,
            'user_id' => 1,
        ]);
        Sake::create([
            'name' => 'test5',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 1,
            'user_id' => 1,
        ]);
        Sake::create([
            'name' => 'test6',
            'image_url' => 'https://placehold.jp/640x480.png',
            'param1_val' => 3,
            'param2_val' => 5,
            'param3_val' => 2,
            'param4_val' => 4,
            'param5_val' => 1,
            'category_id' => 1,
            'user_id' => 1,
        ]);
    }
}
