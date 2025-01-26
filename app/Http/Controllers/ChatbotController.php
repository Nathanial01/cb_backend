<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI;

class ChatbotController extends Controller
{
    protected OpenAI\Client $openai;

    public function __construct()
    {
        // Initialize OpenAI client using the API key from the environment
        $this->openai = OpenAI::client(env('OPENAI_API_KEY'));
    }

    public function handleChat(Request $request)
    {
        // Validate the input
        $request->validate([
            'message' => 'required|string',
        ]);

        try {
            // Call OpenAI API for completion
            $response = $this->openai->completions()->create([
                'model' => 'text-davinci-003',
                'prompt' => $request->message,
                'max_tokens' => 100,
            ]);

            // Extract the response text
            $reply = $response['choices'][0]['text'];

            return response()->json([
                'message' => trim($reply), // Trim to remove unnecessary spaces or line breaks
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to process the request: ' . $e->getMessage(),
            ], 500);
        }
    }
}
