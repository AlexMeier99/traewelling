<?php

namespace App\Http\Controllers\API\Admin;


use App\Exceptions\RateLimitExceededException;
use App\Http\Controllers\API\v1\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function update(Request $request, int $userId): JsonResponse {
        $validated = $request->validate([
                                            'email'         => ['nullable', 'email', 'unique:users,email'],
                                            'shadow_banned' => ['nullable', 'numeric', 'min:0', 'max:1'],
                                        ]);

        //TODO: Check authorization

        $user = User::findOrFail($userId);
        $user->update($validated);

        if (isset($validated['email'])) {
            try {
                $user->sendEmailVerificationNotification();
            } catch (RateLimitExceededException) {
                // Ignore
            }
            if ($user->password === null) {
                $this->sendResetLinkEmail($request);
            }
        }
        return response()->json(['status' => true]);
    }
}
