``` bash

$ git clone https://github.com/linghart/tasks-test.git

$ cd tasks-test
$ composer install

!!! Configure .env to work correctly with MySQL !!!

$ php artisan migrate
$ php artisan seed

$ php artisan jwt:secret

$ php artisan serve

```
