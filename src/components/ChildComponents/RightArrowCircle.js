import React from "react";
import Image from "next/image";
import RightArrow from "../../assets/icons/rightarrow.svg";

function RightArrowCircle({ href }) {
  return (
    <div>
      <a href={href}>
        <Image
          src={RightArrow}
          alt="arrow-logo"
          className="gray-gradient blue-drop-shadow w-[38px] h-[38px] p-[0.85rem] rounded-full"
        />
      </a>
    </div>
  );
}

export default RightArrowCircle;
