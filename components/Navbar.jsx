import Link from "next/link.js";
import { RiMenu4Line } from "react-icons/ri";
import NavLogo from "./UI/NavLogo.jsx";
import Image from "next/image.js";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Image
          className="p-2 sm:hidden"
          src="/logo_guide.svg"
          alt="navlogo"
          width={80}
          height={80}
        />
      </div>

      <div className="navbar-center max-sm:hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <Link href="/tours">Tours</Link>
          </li>
        </ul>
        <NavLogo />
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="">New Tour</Link>
          </li>
          <li>
            <details>
              <summary>Profile</summary>
              <ul className="p-2">
                <li>
                  <a>Account</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <RiMenu4Line className="w-10 h-10 sm:hidden" />
      </div>
    </div>
  );
}
export default Navbar;
