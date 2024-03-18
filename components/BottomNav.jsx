"use client";
import Link from "next/link.js";
import { useState } from "react";
import {
  MdOutlineChat,
  MdOutlineLocationOn,
  MdOutlineAddLocationAlt,
  MdOutlineAccountCircle,
} from "react-icons/md";

const links = [
  { href: "/chat", label: "Chat", icon: <MdOutlineChat className="w-6 h-6" /> },
  { href: "/tours", label: "Tours", icon: <MdOutlineLocationOn className="w-6 h-6" /> },
  {
    href: "/tours/new-tour",
    label: "New Tour",
    icon: <MdOutlineAddLocationAlt className="w-6 h-6" />,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <MdOutlineAccountCircle className="w-6 h-6" />,
  },
];

function BottomNav() {
  const [isActive, setIsActive] = useState(0);

  function handleClick(index) {
    setIsActive((isActive) => (isActive === index ? null : index));
  }

  return (
    <div className="btm-nav btm-nav-md sm:hidden">
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            className={isActive === index ? "active" : null}
            key={index}
            onClick={() => handleClick(index)}
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
export default BottomNav;
