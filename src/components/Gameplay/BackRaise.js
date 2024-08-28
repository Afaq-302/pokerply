import React from "react";
import Image from "next/image";

import Clock from "../../assets/icons/gameplay/clock.png";
import Edit from "../../assets/icons/gameplay/edit.png";

function BackRaise({ isVisible, handleClose }) {
  return (
    <>
      <div
        onClick={handleClose}
        className={`p-4 popup-fitscreen transform -translate-x-1/2  z-[1000]  ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-all duration-200 h-[15vhpx] gray-gradient shadow-lg rounded-t-3xl`}
      >
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 flex flex-col justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-gray-bg px-2.5 py-1 rounded-2xl">
                <span className="orange-gradient-btn text-[14px] font-medium">
                  Min
                </span>
              </div>
              <span className="text-[14px] font-normal">3BB</span>
              <span className="text-[14px] font-normal">5BB</span>
              <span className="text-[14px] font-normal">All in</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="px-4 py-2.5 bg-[#3B1426] border-[1px] border-[#A30000] rounded-[16px] blue-drop-shadow text-[13px] font-bold">
                BACK
              </div>
              <div className="orange-btn-md px-[26px] py-2.5 gray-gradient rounded-[12px] shadow-2xl">
                <button className="orange-gradient-btn text-[13px] font-bold">
                  RAISE
                </button>
              </div>

              <div className="p-2 rounded-full gray-gradient blue-drop-shadow">
                <Image src={Clock} width={25} alt="arrow-logo" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col">
            <div>Raise:</div>
            <div className="flex items-center mt-1">
              <span className="orange-gradient-btn text-[13px] font-bold">
                0.40
              </span>
              <span className="ml-4">
                {" "}
                <Image src={Edit} width={10} alt="arrow-logo" />
              </span>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1 h-1 p-5 flex items-center justify-center rounded-full  shadow-[10px_8px_15px_#0009]">
                <span className="bg-[#314370] orange-gradient-btn">+</span>
              </div>
              <div className="ml-2 w-1 h-1 p-5 flex items-center justify-center rounded-full  shadow-[10px_8px_15px_#0009]">
                <span className="bg-[#314370] orange-gradient-btn">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackRaise;
