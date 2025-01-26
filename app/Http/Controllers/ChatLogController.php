<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatLog;

class ChatLogController extends Controller
{
    /**
     * Retrieve all chat logs.
     */
    public function index()
    {
        $logs = ChatLog::all();
        return response()->json($logs);
    }

    /**
     * Retrieve chat logs for a specific user.
     */
    public function userLogs($name)
    {
        $logs = ChatLog::where('name', $name)->get();

        if ($logs->isEmpty()) {
            return response()->json(['error' => 'No logs found for this user.'], 404);
        }

        return response()->json($logs);
    }
}
