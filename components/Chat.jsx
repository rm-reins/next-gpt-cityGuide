"use client";

import chatResponse from "@/utils/actions.js";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function Chat() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (message) => chatResponse(message),
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate(inputText);
  }

  return (
    <div className="grid grid-rows-[1fr, auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message your AI assistant"
            className="input input-bordered join-item w-full"
            value={inputText}
            required
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            Ask question
          </button>
        </div>
      </form>
    </div>
  );
}
export default Chat;
