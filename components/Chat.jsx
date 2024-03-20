"use client";

import chatResponse from "@/utils/actions.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import ChatWindow from "./UI/ChatWindow.jsx";

function Chat() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => chatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong...");
        return;
      }
      setMessages((prev) => [...prev, data]);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const query = { role: "user", content: inputText };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setInputText("");
  }

  return (
    <div className="flex flex-col justify-between w-full max-w-4xl">
      <ChatWindow messages={messages} isPending={isPending} />

      <form onSubmit={handleSubmit} className="pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Ask your guide"
            className="input input-bordered join-item w-full"
            value={inputText}
            required
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Processing..." : "Ask question"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Chat;
