<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role; // Import the Role model for assigning roles
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration form.
     */
    public function create()
    {
        return Inertia::render('Auth/Register', [
            'genders' => ['Male', 'Female', 'Other'], // Gender options for the form
            'user_types' => [User::ADMIN, User::CLIENT], // Only admin and client
        ]);
    }

    /**
     * Handle the registration form submission.
     */
    public function store(Request $request)
    {
        // Validate the request with only admin and client user types
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users',
            'phone' => 'nullable|digits_between:10,15|unique:users,phone',
            'gender' => 'required|in:Male,Female,Other',
            'user_type' => 'required|in:' . implode(',', [User::ADMIN, User::CLIENT]), // Only admin and client user types
            'password' => 'required|string|confirmed|min:8',
            'profile_picture' => 'nullable|image|mimes:jpg,jpeg,png|max:2048', // Profile picture validation
        ]);

        // Handle profile picture upload
        $profilePicturePath = null;
        if ($request->hasFile('profile_picture')) {
            $profilePicturePath = $request->file('profile_picture')->store('profile_pictures', 'public');
        }

        // Assign role based on user_type
        $role = Role::where('name', $request->user_type)->first();

        if (!$role) {
            return response()->json(['error' => 'Role not found'], 400); // Handle missing role
        }

        // Create the user and assign the role_id based on user_type
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'gender' => $request->gender,
            'user_type' => $request->user_type,
            'password' => Hash::make($request->password),
            'profile_picture' => $profilePicturePath, // Save the profile picture path
            'role_id' => $role->id, // Automatically assign role_id based on user_type
        ]);

        // Fire the Registered event
        event(new Registered($user));

        // Log the user in
        Auth::login($user);

        // Redirect to the dashboard
        return redirect('/dashboard');
    }
}