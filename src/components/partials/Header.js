import React from "react";
import Image from "next/image";

import LeftArrow from "../../assets/icons/leftarrow.svg";
import Heart_Sm from "../../assets/icons/coins/heart-golden.svg";
import Three_Dots from "../../assets/icons/dots.svg";
import Cross from "../../assets/icons/cross.svg";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center">
          <Link href="/">
            <div className="px-[12px] pb-[12px] pt-[15px] rounded-full gray-gradient blue-drop-shadow">
              <Image src={LeftArrow} width={15} alt="arrow-logo" />
            </div>
          </Link>
          <Image
            src={Heart_Sm}
            width={46}
            alt="heart-logo-sm"
            className="ml-2"
          />
        </div>

        <div className="gray-gradient blue-drop-shadow flex items-center bg-blue-400 rounded-[20px]">
          <div className="p-3 py-[6px]  border-r-[0.5px] border-[#a8a8a8b8]">
            <Image src={Three_Dots} alt="3-dots-logo" />
          </div>
          <div className="p-3">
            <Image src={Cross} alt="cross-log" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
