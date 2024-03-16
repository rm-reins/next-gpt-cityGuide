import { FiMoon, FiSun } from "react-icons/fi";

function NightMode() {
  return (
    <label className="swap swap-rotate text-3xl">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      <div className="swap-on">
        <FiMoon />
      </div>
      <div className="swap-off">
        <FiSun />
      </div>
    </label>
  );
}
export default NightMode;
