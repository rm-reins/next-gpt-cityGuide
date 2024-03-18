"use client";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const themes = {
  light: "myLight",
  dark: "myDark",
};

function NightModeMobile() {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <label className="swap swap-rotate text-3xl">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        value={theme}
        className="theme-controller"
        onChange={toggleTheme}
      />

      <div className="swap-on">
        <FiMoon />
      </div>
      <div className="swap-off">
        <FiSun />
      </div>
    </label>
  );
}
export default NightModeMobile;
