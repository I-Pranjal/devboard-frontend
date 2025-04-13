// useHook.js or useChat.js
import { useState } from "react";
import axios from "axios";




const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);
    try {
      const response = await axios.post('https://devboard-backend-8yr8.onrender.com/api/chat', {
          message: userMessage,
        
      }); 
      const botMessage = { role:"assistant",  content: response.data} ;
      setMessages((prev) => [...prev, botMessage]);
    }
    catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: " + error.message },
      ]);
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
