import {
  MdOutlineChat,
  MdOutlineLocationOn,
  MdOutlineAddLocationAlt,
  MdOutlineAccountCircle,
} from "react-icons/md";

function BottomNav() {
  return (
    <div className="btm-nav btm-nav-md sm:hidden">
      <button>
        <MdOutlineChat className="w-6 h-6" />
        Chat
      </button>
      <button className="active">
        <MdOutlineLocationOn className="w-6 h-6" />
        Tours
      </button>
      <button>
        <MdOutlineAddLocationAlt className="w-6 h-6" />
        New Tour
      </button>
      <button>
        <MdOutlineAccountCircle className="w-6 h-6" />
        Account
      </button>
    </div>
  );
}
export default BottomNav;
