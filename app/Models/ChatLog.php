<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class ChatLog extends Model
{
    protected $connection = 'mongodb';

    // Specify a collection explicitly if needed
    protected string $collection = 'chat_logs';

    // Define mass-assignable fields
    protected $fillable = [
        'Name',              // User name
        'message',           // User message
        'response',          // Bot's response
        'subscription_tier', // User's subscription tier
        'created_at',        // Timestamp
        'updated_at',        // Timestamp
    ];
}
