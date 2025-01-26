import React, { useState } from "react";

const ChatBot = () => {
    const [messages, setMessages] = useState([{ sender: "Cyrox", text: "Hi! How can I assist you today?" }]);
    const [input, setInput] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = { sender: "You", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_name: "Guest", message: input, subscription_tier: "free" }),
            });

            const data = await response.json();
            const botMessage = { sender: "Cyrox", text: data.reply || "No response received." };
            setMessages((prev) => [...prev, botMessage]);
        } catch {
            setMessages((prev) => [...prev, { sender: "Cyrox", text: "Error connecting to the server." }]);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-96">
            <div className="p-4 bg-indigo-600 text-white rounded-t-lg">Cyrox ChatBot</div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-100">
                {messages.map((msg, idx) => (
                    <p key={idx} className={`my-2 ${msg.sender === "You" ? "text-right" : "text-left"}`}>
                        <span className={`inline-block p-2 rounded-lg ${msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                            {msg.sender}: {msg.text}
                        </span>
                    </p>
                ))}
            </div>
            <form className="p-4 flex" onSubmit={handleSubmit}>
                <input className="flex-grow p-2 border rounded-md" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="p-2 bg-indigo-600 text-white rounded-md ml-2">Send</button>
            </form>
        </div>
    );
};

export default ChatBot;
