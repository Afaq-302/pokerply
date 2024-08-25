import React from "react";
import Image from "next/image";

import cross from "../assets/icons/cross.svg";

function HistoryPopup({ isVisible, onClose }) {
  return (
    // width: 375px; /* iPhone width, adjust as needed */
    // height: 812px; /* Viewport height */
    // margin: auto;
    // background-color: rgb(89, 89, 163); /* Light background color */
    // overflow: hidden; /* Hide any overflow */
    // background: linear-gradient(to bottom, #040e2b 51%, #192956 100%);
    // padding: 0 15px;
    <div
      className={`px-4 transform -translate-x-1/2 z-[1000] popup-fitscreen  ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[700px] opacity-0"
      } transition-transform duration-200 ease-in-out h-[83vh] popup-dark-blue-gradient shadow-lg rounded-t-3xl`}
    >
      <div className="flex justify-between items-center py-4">
        <h2 className="text-[32px] font-bold">HISTORY</h2>
        <button onClick={onClose}>
          <Image
            src={cross}
            width={40}
            className="p-3 gray-gradient rounded-full"
            alt="cross-logo"
          />
        </button>
      </div>

      <div className="h-[538px] overflow-auto hide-scrollbar">
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* Green Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-out)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className="text-[#00C151] font-semibold">$150.00</p>
        </div>

        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>

        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>

        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>

        {/* Green Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-out)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className="text-[#00C151] font-semibold">$150.00</p>
        </div>

        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
        {/* White Text */}
        <div className="flex items-center justify-between my-3 border-b border-gray-50/10  py-1.5 text-[12px]">
          <div>
            <p className="text-[14px] font-semibold">Cash Table(buy-in)</p>
            <p className="text-[10px] text-white/30">Yesterday: 14:50h</p>
          </div>
          <p className=" font-semibold">$150.00</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryPopup;
