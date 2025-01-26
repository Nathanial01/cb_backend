<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use App\Models\BotSetting;
use App\Models\ChatLog;
use OpenAI\Client;

class ChatbotController extends Controller
{
    protected Client $openAi;

    public function __construct()
    {
        $this->openAi = \OpenAI::client(env('OPENAI_API_KEY'));
    }

    /**
     * Process chatbot messages and return AI response.
     */
    public function processMessage(Request $request)
    {
        $validated = $request->validate([
            'Name' => 'required|string|max:100',
            'message' => 'required|string|max:255',
            'subscription_tier' => 'required|string|in:free,standard,premium',
        ]);

        $name = $validated['Name'];
        $userMessage = $validated['message'];
        $subscriptionTier = $validated['subscription_tier'];

        if (!$this->checkUsageLimits($name, $subscriptionTier)) {
            return response()->json(['error' => 'Daily limit reached. Upgrade your plan.'], 403);
        }

        $botTone = BotSetting::getSetting('bot_tone', 'Friendly');
        $allowedSource = BotSetting::getSetting('allowed_source', 'None');

        $botResponse = $this->generateAiResponse(
            "You are a {$botTone} assistant. Restrict answers to the following source: {$allowedSource}.",
            $userMessage
        );

        // Save chat logs
        ChatLog::create([
            'name' => $name,
            'user_message' => $userMessage,
            'bot_response' => $botResponse,
            'subscription_tier' => $subscriptionTier,
        ]);

        Log::info('Chat interaction logged', [
            'Name' => $name,
            'user' => $userMessage,
            'bot' => $botResponse,
            'tier' => $subscriptionTier,
        ]);

        return response()->json(['reply' => $botResponse]);
    }

    /**
     * Generate AI response using OpenAI API.
     */
    private function generateAiResponse(string $instructions, string $message): string
    {
        try {
            $response = $this->openAi->chat()->create([
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    ['role' => 'system', 'content' => $instructions],
                    ['role' => 'user', 'content' => $message],
                ],
            ]);

            return $response['choices'][0]['message']['content'] ?? 'Sorry, I could not process that.';
        } catch (\Exception $e) {
            Log::error('OpenAI API Error: ' . $e->getMessage());
            return 'There was an error processing your request. Please try again later.';
        }
    }

    /**
     * Check user usage limits based on subscription tier.
     */
    private function checkUsageLimits(string $userName, string $tier): bool
    {
        $dailyLimit = [
            'free' => 5,
            'standard' => 50,
            'premium' => 10000,
        ];

        $cacheKey = "user:{$userName}:daily_usage";
        $usage = Cache::get($cacheKey, 0);

        if ($usage >= $dailyLimit[$tier]) {
            return false;
        }

        Cache::increment($cacheKey, 1);
        Cache::put("{$cacheKey}:reset_time", now()->endOfDay());

        return true;
    }
}
