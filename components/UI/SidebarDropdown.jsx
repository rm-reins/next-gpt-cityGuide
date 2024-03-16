import { RiMenu4Line } from "react-icons/ri";
import NightMode from "./NightMode.jsx";
import {
  MdOutlineChat,
  MdOutlineLocationOn,
  MdOutlineAddLocationAlt,
  MdOutlineAccountCircle,
  MdLogout,
} from "react-icons/md";

function SidebarDropdown() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <RiMenu4Line className="w-9 h-9" />
      </div>
      <ul
        tabIndex={0}
        className="menu right-0 menu-lg dropdown-content mt-6 z-[1] p-2 bg-base-100 rounded-box w-52 rounded-t-none"
      >
        <li>
          <NightMode />
        </li>
        <li></li>
        <li>
          <a>
            <MdOutlineChat className="w-6 h-6" /> Chat
          </a>
        </li>
        <li>
          <a>
            <MdOutlineLocationOn className="w-6 h-6" />
            Tours
          </a>
        </li>
        <li>
          <a>
            <MdOutlineAddLocationAlt className="w-6 h-6" />
            New Tour
          </a>
        </li>
        <li>
          <a>
            <MdOutlineAccountCircle className="w-6 h-6" />
            Account
          </a>
        </li>

        <li></li>
        <li>
          <a>
            <MdLogout className="w-6 h-6" />
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SidebarDropdown;
