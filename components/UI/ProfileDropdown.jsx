import { MdLogout, MdOutlineAccountCircle } from "react-icons/md";
import NightMode from "./NightMode.jsx";

function ProfileDropdown() {
  return (
    <details className="dropdown">
      <summary>Profile</summary>
      <ul tabIndex={0} className="p-2 bg-base-100 rounded-t-none">
        <li>
          <NightMode />
        </li>
        <li>
          <a>
            <MdOutlineAccountCircle className="w-6 h-6" />
            Account
          </a>
        </li>
        <li>
          <a>
            <MdLogout className="w-6 h-6" />
            Log Out
          </a>
        </li>
      </ul>
    </details>
  );
}
export default ProfileDropdown;
