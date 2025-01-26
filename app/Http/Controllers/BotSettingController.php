<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BotSetting;

class BotSettingController extends Controller
{
    /**
     * Get all bot settings.
     */
    public function index()
    {
        $settings = BotSetting::all();
        return response()->json($settings);
    }

    /**
     * Create a new bot setting.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|max:255',
            'value' => 'required|string|max:255',
        ]);

        $setting = BotSetting::create($validated);

        return response()->json([
            'message' => 'Setting created successfully.',
            'data' => $setting,
        ]);
    }

    /**
     * Get a specific bot setting.
     */
    public function show($id)
    {
        $setting = BotSetting::find($id);

        if (!$setting) {
            return response()->json(['error' => 'Setting not found.'], 404);
        }

        return response()->json($setting);
    }

    /**
     * Update a specific bot setting.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'key' => 'sometimes|string|max:255',
            'value' => 'sometimes|string|max:255',
        ]);

        $setting = BotSetting::find($id);

        if (!$setting) {
            return response()->json(['error' => 'Setting not found.'], 404);
        }

        $setting->update($validated);

        return response()->json([
            'message' => 'Setting updated successfully.',
            'data' => $setting,
        ]);
    }

    /**
     * Delete a specific bot setting.
     */
    public function destroy($id)
    {
        $setting = BotSetting::find($id);

        if (!$setting) {
            return response()->json(['error' => 'Setting not found.'], 404);
        }

        $setting->delete();

        return response()->json(['message' => 'Setting deleted successfully.']);
    }
}
