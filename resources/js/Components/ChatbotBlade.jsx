import React, { useEffect, useState } from "react";

const ChatbotBlade = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        // Fetch the rendered Blade HTML from the Laravel route
        fetch("/chatbot")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load chatbot view.");
                }
                return response.text();
            })
            .then((html) => setContent(html))
            .catch((error) => console.error("Error loading chatbot:", error));
    }, []);

    return (
        <div
            className="chatbot-blade"
            dangerouslySetInnerHTML={{ __html: content }}
        ></div>
    );
};

export default ChatbotBlade;
