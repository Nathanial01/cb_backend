document.addEventListener('DOMContentLoaded', function () {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbox = document.getElementById('chatbox');
    const form = document.getElementById('chatbot-form');
    const messagesDiv = document.getElementById('messages');
    const promptInput = document.getElementById('prompt');
    let chatboxOpened = false;
    const NotificationSound = new Audio('/vendor/cyrox/chatbot/audio/level-up-3-199576.mp3');
    const userImage = "{{ Auth::check() ? asset('images/' . Auth::user()->profile_image) : asset('img/logo.svg') }}";

    // Toggle chatbot visibility
    chatbotIcon.addEventListener('click', function () {
        chatbox.classList.toggle('hidden');
        if (!chatboxOpened) {
            messagesDiv.insertAdjacentHTML('beforeend', `
                <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <div class="rounded-full bg-gray-100 border p-1">
                            <!-- SVG Icon -->
                        </div>
                    </span>
                    <p class="leading-relaxed">
                        <span class="block font-bold text-gray-700">AI</span> Hi, how can I help you today?
                    </p>
                </div>
            `);
            chatboxOpened = true;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
            NotificationSound.play();
        }
    });

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const prompt = promptInput.value.trim();
        if (prompt === '') return;

        promptInput.value = '';
        messagesDiv.insertAdjacentHTML('beforeend', `
            <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1 justify-end">
                <span class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                    <img src="${userImage}" alt="User" class="profile-picture w-10 h-10">
                </span>
                <p class="leading-relaxed">
                    <span class="block font-bold text-gray-700">You</span> ${prompt}
                </p>
            </div>
        `);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        fetch("{{ route('chatbot.generate') }}", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}'
            },
            body: JSON.stringify({ prompt: prompt })
        })
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                if (data.response) {
                    messagesDiv.insertAdjacentHTML('beforeend', `
                    <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                            <div class="rounded-full bg-gray-100 border p-1">
                                <!-- SVG Icon -->
                            </div>
                        </span>
                        <p class="leading-relaxed">
                            <span class="block font-bold text-gray-700">AI</span> ${data.response}
                        </p>
                    </div>
                `);
                    messagesDiv.scrollTop = messagesDiv.scrollHeight;
                    NotificationSound.play();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Optionally display an error message in the chat
                messagesDiv.insertAdjacentHTML('beforeend', `
                <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                        <div class="rounded-full bg-gray-100 border p-1">
                            <!-- SVG Icon -->
                        </div>
                    </span>
                    <p class="leading-relaxed">
                        <span class="block font-bold text-gray-700">Error</span> Sorry, I couldn't get a response.
                    </p>
                </div>
            `);
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            });
    });

    promptInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
    document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptAllButton = document.getElementById("cookie-accept-all");
    const rejectAllButton = document.getElementById("cookie-reject-all");
    const settingsButton = document.getElementById("cookie-settings");

    // Function to hide the cookie banner
    function hideBanner() {
        cookieBanner.classList.add("opacity-0");
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 300); // Delay to allow the fade-out animation
    }

    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

    // Function to get a cookie by name
    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) return value;
        }
        return null;
    }

    // Check if the cookie banner should be displayed
    if (!getCookie("cookie_consent")) {
        cookieBanner.style.display = "block";
    }

    // Accept all cookies
    acceptAllButton.addEventListener("click", () => {
        setCookie("cookie_consent", "accepted", 365);
        hideBanner();
    });

    // Reject all cookies
    rejectAllButton.addEventListener("click", () => {
        setCookie("cookie_consent", "rejected", 365);
        hideBanner();
    });

    // Change settings (placeholder functionality)
    settingsButton.addEventListener("click", () => {
        alert("Settings dialog will appear here (to be implemented).");
    });
});

});
