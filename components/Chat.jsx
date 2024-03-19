"use client";

import chatResponse from "@/utils/actions.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

function Chat() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useUser();
  const date = new Date();
  const local = date.toLocaleTimeString("en-DE", {
    timeStyle: "short",
    hourCycle: "h24",
  });

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
    <div className="flex flex-col justify-between max-w-2xl w-full h-full">
      <div className="min-h-80 overflow-auto">
        {messages.map(({ role, content }, index) => {
          return (
            <div key={index}>
              {role === "user" ? (
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="user_photo" src={user.imageUrl} />
                    </div>
                  </div>
                  <div className="chat-header">
                    {user.firstName}
                    <time className="text-xs opacity-50">{` ${local}`}</time>
                  </div>

                  <div className="chat-bubble">{content}</div>
                </div>
              ) : (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="AI_photo"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">
                    UrbanIQ AI
                    <time className="text-xs opacity-50">{` ${local}`}</time>
                  </div>
                  <div className="chat-bubble">{content}</div>
                </div>
              )}
            </div>
          );
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>

      <form onSubmit={handleSubmit} className="min-w-96 max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message your AI assistant"
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
