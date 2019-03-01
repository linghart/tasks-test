<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::get('get-tasks', 'TaskController@getTasks');
    Route::post('get-task', 'TaskController@getTask');
    Route::post('create-task', 'TaskController@createTask');
    Route::post('update-task', 'TaskController@updateTask');
    Route::post('toggle-status', 'TaskController@toggleStatus');
    Route::post('get-tags-autocomplete', 'TaskController@getTagsAutocomplete');
});

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::post('auth/register', 'AuthController@register');
    Route::post('auth/login', 'AuthController@login');
    Route::post('auth/logout', 'AuthController@logout');
    Route::post('auth/update', 'AuthController@update');
    Route::get('auth/refresh', 'AuthController@refresh');
    Route::get('auth/user', 'AuthController@user');
});