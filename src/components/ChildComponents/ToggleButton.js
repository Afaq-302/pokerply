import { useState } from "react";

export default function ToggleButton({ isOpen }) {
  const [isOn, setIsOn] = useState(isOpen);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`flex items-center w-12 h-7 p-[2px] rounded-full cursor-pointer  bg-[#253250] blue-drop-shadow`}
      onClick={toggleSwitch}
    >
      <div
        className={`w-6 h-6 rounded-full transform transition-transform duration-300  ${
          isOn
            ? "translate-x-5 bg-gradient-to-r from-yellow-400 to-orange-500"
            : "translate-x-0 bg-white/20"
        }`}
      />
    </div>
  );
}
