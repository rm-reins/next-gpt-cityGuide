import { useState } from "react";

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md bg-white rounded-2xl p-4">
        <div className="flex flex-row items-center justify-between space-y-0 p-2">
          <h2 className="text-xl font-semibold">Important Information</h2>
        </div>
        <div className="card-body">
          <p className="text-muted-foreground">
            This is a legacy app I&apos;m rewriting with a modern stack,
            improved UX/UI, and refined features{" "}
            <a
              href="https://github.com/Freemasoid/nextjs-urbaniq-explorer"
              className="underline font-bold"
            >
              here
            </a>
            .
          </p>
          <p className="mt-2 text-muted-foreground">
            Demo login isn&apos;t available due to ChatGPT token usage — this
            prevents API abuse and ensures user accountability.
          </p>
          <p className="mt-2 text-muted-foreground">
            Login is securely handled by{" "}
            <a
              href="https://clerk.com"
              className="underline font-bold"
            >
              Clerk
            </a>{" "}
            with GitHub or Google authentication.
          </p>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="btn btn-primary"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
