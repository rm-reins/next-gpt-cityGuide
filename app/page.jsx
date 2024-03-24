"use client";
import Link from "next/link.js";
import Timeline from "@/components/Timeline.jsx";

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-lg c">
          <img src="/logo_guide.svg" alt="logo" />

          <h1 className="text-6xl font-bold text-primary">UrbanIQ Explorer</h1>

          <p className="py-6 text-lg leading-loose">
            Your AI-driven guide to uncovering fascinating city destinations effortlessly
          </p>

          <Link href="/chat" className="btn btn-primary">
            Let&#39;s get started!
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
