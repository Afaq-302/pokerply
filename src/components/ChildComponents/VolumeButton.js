"use client";
import React, { useEffect, useState } from "react";
import { FiVolume2 } from "react-icons/fi";
function VolumeButton() {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function updateSlider() {
      const value = slider.value;
      const max = slider.max;
      const percentage = (value / max) * 100;
      slider.style.backgroundSize = `${percentage}% 100%`;
    }

    // Initial call to set the background on page load
    updateSlider();

    // Update the background on slider input change
    slider.addEventListener("input", updateSlider);
  }, []);

  const [value, setValue] = useState(30); // initial value

  const handleChange = (e) => {
    const maxValue = e.target.max;
    const currentValue = e.target.value;
    const percentage = (currentValue / maxValue) * 100;
    e.target.style.backgroundSize = `${percentage}% 100%`;
    setValue(currentValue);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div></div>
        <FiVolume2 size={16} color="#fff" />
        <input
          className="slider"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default VolumeButton;
