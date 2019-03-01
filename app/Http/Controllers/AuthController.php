<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\Http\Resources\User\UserResource;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api', ['except' => ['login','register','refresh']]);
  }

    public function register(Request $request)
    {
        $user = new User;
        $user->username = $request->get('username');
        $user->password = bcrypt($request->get('password'));
        $user->save();
        return response([
            'status' => 'success',
            'data' => $user
        ], 200);
    }

  public function login(Request $request)
  {
      $credentials = $request->only('username', 'password');

      if (! $token = auth()->attempt($credentials)) {
        return response([
            'status' => 'error',
            'error' => 'invalid.credentials',
            'msg' => 'Invalid Credentials.'
        ], 400);
    }

    return response([
      'status' => 'success',
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ])
    ->header('Authorization', $token);
  }

    public function user(Request $request)
    {
        $user = User::find(auth::user()->id);
        return response([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function logout()
    {
        JWTAuth::parseToken()->invalidate();
        return response([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    public function refresh()
    {
        return response([
            'status' => 'success'
        ]);
    }

    public function impersonate(Request $request)
    {
        $user = User::find($request->get('id'));
        if ( ! $token = JWTAuth::fromUser($user)) {
            return response([
                'status' => 'error',
                'error' => 'invalid.credentials',
                'msg' => 'Invalid Credentials.'
            ], 404);
        }
        return response([
            'status' => 'success'
        ])
            ->header('Authorization', $token);
    }

  protected function respondWithToken($token)
  {
    return response()->json([
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60
    ]);
  }

}