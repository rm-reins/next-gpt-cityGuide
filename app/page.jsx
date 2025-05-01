"use client";
import Link from "next/link.js";
import Timeline from "@/components/Timeline.jsx";
import { useState, useEffect } from "react";
import Popup from "@/components/Popup.jsx";

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPopupOpen(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-lg c">
          <img
            src="/logo_guide.svg"
            alt="logo"
          />

          <h1 className="text-6xl font-bold text-primary">UrbanIQ Explorer</h1>

          <p className="py-6 text-lg leading-loose">
            Your AI-driven guide to uncovering fascinating city destinations
            effortlessly
          </p>

          <Link
            href="/chat"
            className="btn btn-primary"
          >
            Let&#39;s get started!
          </Link>
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}
export default HomePage;
