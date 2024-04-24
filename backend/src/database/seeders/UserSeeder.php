<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        User::truncate();

        User::create([
            'name' => 'test',
            'email' => 'xxx@example.com',
            'password' => 'password',
            'remember_token' => 'xxxx',
        ]);

        User::create([
            'name' => 'test2',
            'email' => 'yyy@example.com',
            'password' => 'password2',
            'remember_token' => 'yyyy',
        ]);
    }
}
