<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class BotSetting extends Model
{
    protected $connection = 'mongodb';

    // Specify the collection for bot settings
    protected string $collection = 'bot_settings';

    // Define mass-assignable fields for settings
    protected $fillable = [
        'key',       // Setting key (e.g., 'bot_tone', 'allowed_source')
        'value',     // Setting value (e.g., 'Friendly', 'Knowledge Base')
        'updated_at' // Timestamp for updates
    ];

    /**
     * Fetch a setting value by key with a default fallback.
     */
    public static function getSetting(string $key, $default = null)
    {
        return self::where('key', $key)->value('value') ?? $default;
    }
}
