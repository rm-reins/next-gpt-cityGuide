"use client";
import { MdLogout, MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link.js";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function ProfileDropdown() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  useEffect(() => {
    window.addEventListener("click", function (e) {
      document.querySelectorAll(".dropdown").forEach(function (dropdown) {
        if (!dropdown.contains(e.target)) {
          dropdown.open = false;
        }
      });
    });
  });

  return (
    <details className="dropdown">
      <summary>Profile</summary>
      <ul
        tabIndex={0}
        className="p-2 bg-base-100 rounded-t-none"
      >
        <li>
          <Link href="/profile">
            <MdOutlineAccountCircle className="w-6 h-6" />
            Account
          </Link>
        </li>
        <li>
          <button onClick={handleSignOut}>
            <MdLogout className="w-6 h-6" />
            Log Out
          </button>
        </li>
      </ul>
    </details>
  );
}
export default ProfileDropdown;
