<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Client as OpenAIClient;

class ChatbotController extends Controller
{
    protected $openai;

    public function __construct()
    {
        $this->openai = OpenAIClient::factory(['api_key' => env('OPENAI_API_KEY')]);
    }

    public function handleChat(Request $request)
    {
        // Validate the input
        $request->validate([
            'message' => 'required|string',
        ]);

        try {
            // Call OpenAI API
            $response = $this->openai->completions()->create([
                'model' => 'text-davinci-003',
                'prompt' => $request->message,
                'max_tokens' => 100,
            ]);

            return response()->json([
                'message' => $response['choices'][0]['text'],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to process the request.',
            ], 500);
        }
    }
}
