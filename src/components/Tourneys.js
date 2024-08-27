import React, { useState } from "react";

import Image from "next/image";

import Search from "../assets/icons/search.svg";
import ToggleButton from "./ChildComponents/ToggleButton";

function Tourneys() {
  const [isChecked, setIsChecked] = useState(true);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="mt-4">
        <div className="grid grid-cols-2 my-2 text-[14px]">
          <div className="flex items-center space-x-4">
            <div className="rounded-gray-bg px-2.5 py-1 rounded-2xl">
              <span className="orange-gradient-btn font-semibold">All</span>
            </div>
            <div className="font-light">Free</div>
            <div className="font-light">Paid</div>
          </div>

          <div className="flex justify-end items-center">
            <span className="text-[12px] font-light mr-3 text-white/40">
              Registered
            </span>
            <ToggleButton isOpen={true} />
          </div>
        </div>

        <section className="relative flex justify-between h-[100px] gray-gradient px-8 py-3 rounded-[20px] ">
          <p className="text-[24px] font-bold text-white/30">
            No Tournaments Found
          </p>
          <Image
            src={Search}
            width={120}
            className="absolute top-[30px] left-[210px]"
            alt="search-logo"
          />
        </section>
      </div>
    </>
  );
}

export default Tourneys;
