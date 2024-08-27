import React, { useState, useEffect } from "react";
import Image from "next/image";

import Emoji1 from "../../assets/icons/gameplay/emojis/1.png";
import Emoji2 from "../../assets/icons/gameplay/emojis/2.png";
import Emoji3 from "../../assets/icons/gameplay/emojis/3.png";
import Emoji4 from "../../assets/icons/gameplay/emojis/4.png";
import Emoji5 from "../../assets/icons/gameplay/emojis/5.png";
import Emoji6 from "../../assets/icons/gameplay/emojis/6.png";
import Emoji7 from "../../assets/icons/gameplay/emojis/7.png";
import Emoji8 from "../../assets/icons/gameplay/emojis/8.png";
import Emoji9 from "../../assets/icons/gameplay/emojis/9.png";
import Emoji10 from "../../assets/icons/gameplay/emojis/10.png";
import Emoji11 from "../../assets/icons/gameplay/emojis/11.png";
import Emoji12 from "../../assets/icons/gameplay/emojis/12.png";

function EmojisPopup({ isVisible, handleClose }) {
  const emojisArray = [
    Emoji1,
    Emoji2,
    Emoji3,
    Emoji4,
    Emoji5,
    Emoji6,
    Emoji7,
    Emoji8,
    Emoji9,
    Emoji10,
    Emoji11,
    Emoji12,
  ];

  const [visibleEmoji, setVisibleEmoji] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleClick = (emoji) => {
    setVisibleEmoji(emoji);
    setAnimate(false); // Reset animation state for re-triggering
    handleClose();
  };

  useEffect(() => {
    if (visibleEmoji) {
      const timeout1 = setTimeout(() => {
        setAnimate(true); // Start animation
      }, 50); // Slight delay to allow for re-render before animation

      const timeout2 = setTimeout(() => {
        setAnimate(false); // Trigger fade out after 2 seconds
      }, 1000);

      const timeout3 = setTimeout(() => {
        setVisibleEmoji(null); // Hide emoji after fade-out
      }, 2000); // Adjust this timing according to fade-out transition

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, [visibleEmoji]);

  return (
    <>
      <div
        className={`${
          isVisible ? "opacity-100 visible" : "opacity-0 hidden"
        } absolute w-[84%] top-[60%] left-[7%] px-10 py-6 mx-auto backdrop-blur-[12px] rounded-[30px] bg-[#040e2b] bg-opacity-70 z-[20]`}
      >
        <div className="notch"></div>
        <div className="grid grid-cols-4 gap-8">
          {emojisArray.map((emoji, index) => (
            <div
              key={index}
              className="flex items-center justify-center cursor-pointer"
              onClick={() => handleClick(emoji)}
            >
              <Image src={emoji} width={35} alt="emoji" />
            </div>
          ))}
        </div>
      </div>

      {visibleEmoji && (
        <div
          className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`transition-transform duration-300 ease-out relative top-[130px] ${
              animate ? "scale-100 translate-y-0" : "scale-0 translate-y-full"
            }`}
          >
            <Image src={visibleEmoji} width={40} alt="selected emoji" />
          </div>
        </div>
      )}
    </>
  );
}

export default EmojisPopup;
