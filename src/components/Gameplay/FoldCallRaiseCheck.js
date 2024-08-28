import React from "react";
import Image from "next/image";

function FoldCall({ isVisible, handleClose }) {
  return (
    <>
      <div
        onClick={handleClose}
        className={`p-4 popup-fitscreen transform -translate-x-1/2  z-[1000]  ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-all duration-200 h-[12vh] gray-gradient shadow-lg rounded-t-3xl`}
      >
        <div className="flex justify-between py-2">
          <div className="px-5 py-2.5 bg-[#3B1426] border-[1px] border-[#A30000] rounded-[16px] blue-drop-shadow text-[13px] font-bold">
            FOLD
          </div>
          <div className="rounded-gray-bg px-5 py-2.5 rounded-[16px] blue-drop-shadow gray-gradient">
            <span className="orange-gradient-btn text-[13px] font-extrabold">
              CALL
            </span>
          </div>
          <div className="px-5 py-2.5 bg-[#002E0C]  border-[1px] border-[#007C21] rounded-[16px] blue-drop-shadow text-[13px] font-bold">
            RAISE
          </div>
          <div className="rounded-gray-bg px-5 py-2.5 rounded-[16px] blue-drop-shadow gray-gradient">
            <span className="orange-gradient-btn text-[13px] font-extrabold">
              CHECK
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoldCall;
