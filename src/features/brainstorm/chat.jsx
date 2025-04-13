import React, { useState } from "react";
import useChat from "@hooks/useChat"; 
import ReactMarkdown from "react-markdown"; 

const BrainstormChat = () => {
  const [myMessage, setMyMessage] = useState("");
  const { messages, loading, sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!myMessage.trim()) return;
    sendMessage(myMessage);
    setMyMessage("");
  };

  return (
    <div className="flex flex-col max-w-screen h-[90vh] shadow-md bg-gray-50 dark:bg-gray-900">
      <div className="p-4 text-lg font-semibold border-b dark:border-gray-700 dark:text-white">
        Let's Discuss ...
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`whitespace-pre-line p-3 rounded-md text-md max-w-screen ${
              msg.role === "user"
                ? "bg-blue-200 dark:bg-gray-200 self-end"
                : "bg-gray-200 dark:bg-gray-700 self-start dark:text-white"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="italic text-gray-500 dark:text-gray-400">Thinking...</div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t dark:border-gray-700"
      >
        <input
          type="text"
          value={myMessage}
          onChange={(e) => setMyMessage(e.target.value)}
          placeholder="Type your idea or question..."
          className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default BrainstormChat;
