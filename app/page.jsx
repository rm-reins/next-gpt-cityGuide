import Image from "next/image.js";
import Link from "next/link.js";

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <img src="/logo_guide.svg" alt="logo" />
          <h1 className="text-6xl font-bold text-primary">UrbanIQ Explorer</h1>
          <p className="py-6 text-lg leading-loose">
            Your AI-driven guide to uncovering fascinating city destinations effortlessly
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Let&#39;s get started!
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
