<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\BotSettingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|--------------------------------------------------------------------------
*/

// Route to get the authenticated user's information (requires Sanctum for authentication)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// API Routes for the chatbot functionality
Route::prefix('chat')->group(function () {
    Route::post('/', [ChatbotController::class, 'processMessage']); // Process chatbot messages
    Route::get('/logs', [ChatbotController::class, 'getLogs']);    // Retrieve chat logs
});

// Admin routes for managing chatbot settings
Route::prefix('admin')->group(function () {
    Route::get('/settings', [BotSettingController::class, 'index']);   // Get all bot settings
    Route::post('/settings', [BotSettingController::class, 'store']); // Create a new bot setting
    Route::get('/settings/{id}', [BotSettingController::class, 'show']); // Get a specific bot setting
    Route::put('/settings/{id}', [BotSettingController::class, 'update']); // Update a specific bot setting
    Route::delete('/settings/{id}', [BotSettingController::class, 'destroy']); // Delete a bot setting
});
