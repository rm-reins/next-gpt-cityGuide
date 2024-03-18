import Link from "next/link.js";
import NavLogo from "./UI/NavLogo.jsx";
import Image from "next/image.js";
import ProfileDropdown from "./UI/ProfileDropdown.jsx";
import NightMode from "./UI/NightMode.jsx";

function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="sm:hidden flex items-center">
          <Image
            className=""
            src="/logo_guide.svg"
            alt="navlogo"
            width={60}
            height={60}
          />
          <h1 className="text-xl font-bold text-center">UrbanIQ Explorer</h1>
        </div>
      </div>

      <div className="navbar-center max-sm:hidden lg:flex">
        <ul className="menu text-base menu-horizontal px-1">
          <li>
            <Link href="/chat">Chat</Link>
          </li>
          <li>
            <Link href="/tours/new-tour">New Tour</Link>
          </li>
        </ul>

        <NavLogo />

        <ul className="menu text-base menu-horizontal px-1">
          <li>
            <Link href="/tours">Tours</Link>
          </li>
          <li>
            <ProfileDropdown />
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="pr-4">
          <NightMode />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
