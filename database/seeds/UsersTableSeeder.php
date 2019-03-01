<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $user = new User();
            $user->username = 'admin';
            $user->password = bcrypt('admin');
        $user->save();

        for($i = 2; $i <= 21; $i++)
        {
            $gender = rand(1,20) % 2 == 0 ? 'male' : 'female';
            $first_name = $faker->firstName($gender);
            $last_name = $faker->lastName();
            
            $user = new User();
                $user->username = $first_name . ' ' . $last_name;
                $user->password = bcrypt('password');
                $user->email = $i . '_' . lcfirst($first_name) . '_' . lcfirst($last_name) . "@test.com";
                $user->remember_token = true;
            $user->save();          
        }
    }
}
