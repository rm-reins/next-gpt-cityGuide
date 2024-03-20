import Navbar from "@/components/Navbar.jsx";
import BottomNav from "@/components/BottomNav.jsx";

export default function layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="bg-base-200 px-8 py-12 sm:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-7rem)] z-0 flex justify-center">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
