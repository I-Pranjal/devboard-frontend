// useHook.js or useChat.js
import { useState } from "react";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";


const geminiAPI = process.env.GEMINI_API ;
const ai = new GoogleGenAI({ apiKey: geminiAPI });


const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [userMessage],
      });
      const botmessage = { role: "assistant", content: response.text };
      setMessages((prev) => [...prev, botmessage]);
    } catch (err) {
      console.error("ChatGPT error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
};

export default useChat;
