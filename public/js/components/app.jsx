import React from "react";
import ReactDOM from "react-dom/client";
import ChatBot from "./ChatBot";

const root = document.getElementById("chatbot-root");

if (root) {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(<ChatBot />);
}
