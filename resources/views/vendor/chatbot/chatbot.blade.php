<div class="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-4">
    <h2 class="text-lg font-bold mb-4 text-gray-800">ChatBot</h2>
    <div id="chat-messages" class="overflow-y-auto h-64 border border-gray-300 rounded p-2 bg-gray-100">
        @foreach($messages ?? [] as $message)
            <div class="mb-2">
                <strong>{{ $message['sender'] }}:</strong> {{ $message['text'] }}
            </div>
        @endforeach
    </div>
    <form action="{{ route('chatbot.message') }}" method="POST" class="mt-4">
        @csrf
        <input type="text" name="message" class="w-full border rounded p-2" placeholder="Type your message..." required>
        <button type="submit" class="mt-2 w-full bg-blue-500 text-white p-2 rounded">Send</button>
    </form>
</div>
