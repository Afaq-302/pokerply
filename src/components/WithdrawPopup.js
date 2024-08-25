import React from "react";
import Image from "next/image";

import cross from "../assets/icons/cross.svg";

function Withdraw({ isVisible, onClose }) {
  return (
    <div
      className={`p-4 popup-fitscreen transform -translate-x-1/2  z-[1000]  ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[700px] opacity-0"
      } transition-transform duration-200 ease-in-out h-[48vh] popup-dark-blue-gradient shadow-lg rounded-t-3xl`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-[32px] font-bold">WITHDRAW</h2>
        <button onClick={onClose}>
          <Image
            src={cross}
            width={40}
            className="p-3 gray-gradient rounded-full"
            alt="cross-logo"
          />
        </button>
      </div>

      <div className="gray-gradient h-[114px] my-4 rounded-[15px] py-5">
        <p className="text-[16px] font-semibold text-center">
          Amount in POKCRPLY
        </p>
        <div className="h-[70px] gray-gradient rounded-[15px] text-center">
          <div className="flex flex-row items-center justify-center">
            <p className="orange-gradient-btn text-[40px] font-bold">$0.00</p>
            <p className="rounded-gray-bg rounded-[30px] ml-1.5 px-2.5 text-[14px] font-semibold">
              MAX: $3.33
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-4">
        <div>
          <p className="text-[12px] font-thin">1$=0.2 POKCPLY</p>
          <p className="text-[12px] font-thin mt-[2px]">Network Fee $2.2</p>
        </div>
        <div>
          <p className="text-[12px] font-thin text-white/45">You Will Get</p>
          <p className="text-[14px] font-medium mt-[2px]">1 POKCPLY</p>
        </div>
      </div>

      {/* TOP BUTTON */}
      <div className="my-4">
        <div className="orange-btn-md py-[10px] dark-blue-gradient text-center">
          <button className="orange-gradient-btn text-[16px] font-bold">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
