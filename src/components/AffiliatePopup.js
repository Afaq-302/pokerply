import React from "react";
import Image from "next/image";

import cross from "../assets/icons/cross.svg";
import arrow_down from "../assets/icons/arrow-down.svg";

function AffiliatePopup({ isVisible, onClose }) {
  return (
    // width: 375px; /* iPhone width, adjust as needed */
    // height: 812px; /* Viewport height */
    // margin: auto;
    // background-color: rgb(89, 89, 163); /* Light background color */
    // overflow: hidden; /* Hide any overflow */
    // background: linear-gradient(to bottom, #040e2b 51%, #192956 100%);
    // padding: 0 15px;
    <div
      className={`p-4 transform -translate-x-1/2  z-[1000]  popup-fitscreen  ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[700px] opacity-0"
      } transition-transform duration-200 ease-in-out h-[83vh] popup-dark-blue-gradient shadow-lg rounded-t-3xl`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-bold">AFFILIATE PROGRAM</h2>
        <button onClick={onClose}>
          <Image
            src={cross}
            width={40}
            className="p-3.5 gray-gradient rounded-full"
            alt="cross-logo"
          />
        </button>
      </div>
      {/* First Section */}
      <div className="grid grid-cols-2 gap-3 mt-3">
        <div className="relative flex flex-col gray-gradient rounded-[15px] ">
          {/* <span className="absolute top-[40%] left-[-34px] transform font-medium">
            Collect
          </span> */}
          <div className="p-3 text-center">
            <p className=" text-[12px] font-medium">Pending Earnings</p>
            <p className="flex items-end justify-center mt-3">
              <span
                className="orange-gradient-btn py-[7px] px-[8px] mx-[1.5px] rounded-lg text-[16px] font-bold"
                style={{ boxShadow: "10px 10px 30px 0 rgba(0, 0, 0, 0.6)" }}
              >
                0
              </span>

              <span
                className="orange-gradient-btn  py-[7px] px-[8px] mx-[1.5px] rounded-lg text-[16px] font-bold"
                style={{ boxShadow: "10px 10px 30px 0 rgba(0, 0, 0, 0.6)" }}
              >
                0
              </span>

              <span
                className="orange-gradient-btn  py-[7px] px-[8px] mx-[1.5px] rounded-lg text-[16px] font-bold"
                style={{ boxShadow: "10px 10px 30px 0 rgba(0, 0, 0, 0.6)" }}
              >
                0
              </span>

              <span className="orange-gradient-btn  text-[16px] font-bold">
                .
              </span>

              <span
                className="orange-gradient-btn  py-[6px] px-[5px] mx-[1.5px] rounded-md text-[13px] font-bold"
                style={{ boxShadow: "10px 10px 30px 0 rgba(0, 0, 0, 0.6)" }}
              >
                0
              </span>
              <span
                className="orange-gradient-btn  py-[6px] px-[5px] mx-[1.5px] rounded-md text-[13px] font-bold"
                style={{ boxShadow: "10px 10px 30px 0 rgba(0, 0, 0, 0.6)" }}
              >
                0
              </span>
            </p>
          </div>

          <button className="h-[39px] w-full bg-[#6379E4] mt-auto rounded-b-[15px] text-[14px] font-semibold">
            COLLECT
          </button>
        </div>

        <div className="grid grid-rows-2 gap-2">
          <div className="h-[70px] gray-gradient rounded-[15px] p-3 text-center">
            <p className="text-[12px] font-medium">Reward Level </p>
            <p className="orange-gradient-btn  ext-[24px] font-bold">10%</p>
          </div>
          <div className="h-[70px] gray-gradient rounded-[15px] p-3 text-center">
            <p className="text-[12px] font-medium">Total Earnings</p>
            <p className="orange-gradient-btn text-[24px] font-bold">0.00</p>
          </div>
        </div>
      </div>

      {/* Reffera Link */}
      <div className="flex items-center justify-between gray-gradient rounded-[15px] mt-4 px-4 py-3.5">
        <div className="flex flex-col">
          <p className="text-[14px] font-medium">Your refferal link</p>
          <p className="text-[12px] font-light mt-1.5">
            https://www.figma.com/design/...
          </p>
        </div>

        <div className="orange-btn-md px-[12px] py-[2px] dark-blue-gradient">
          <button className="orange-gradient-btn text-[14px] font-extrabold">
            COPY
          </button>
        </div>
      </div>

      {/* YOUR REFFERALS */}
      <div className="mt-4">
        <h2 className="text-[20px] font-bold my-1">YOUR REFFERALS</h2>
        <div className="h-[88px] flex flex-col gray-gradient rounded-[15px] mt2.5 px-4 py-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-normal text-white/40">Referral</p>
            <p className="text-[12px] font-normal text-white/40">Deposit</p>
            <p className="text-[12px] font-normal text-white/40">Your profit</p>
          </div>
          <p className="text-[13px] font-bold text-white/30 mt-auto">
            No Tournaments Found
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="overflow-auto hide-scrollbar mt-3.5 h-[31vh]">
        <h2 className="text-[20px] font-bold">FAQ:</h2>

        <div className="flex items-center justify-between pb-2.5 my-2 border-b border-gray-50/10  text-[12px]">
          <p className="text-[14px] font-semibold">
            What is POKCPLY Affiliate{" "}
          </p>
          <div>
            <Image
              src={arrow_down}
              width={39}
              className="px-[14px] py-[16px] gray-gradient rounded-full cursor-pointer"
              alt="cross-logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-2.5 my-2 border-b border-gray-50/10  text-[12px]">
          <p className="text-[14px] font-semibold">How does it work?</p>
          <div>
            <Image
              src={arrow_down}
              width={39}
              className="px-[14px] py-[16px] gray-gradient rounded-full cursor-pointer"
              alt="cross-logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-2.5 my-2 border-b border-gray-50/10  text-[12px]">
          <p className="text-[14px] font-semibold">How much can I earn?</p>
          <div>
            <Image
              src={arrow_down}
              width={39}
              className="px-[14px] py-[16px] gray-gradient rounded-full cursor-pointer"
              alt="cross-logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pb-2.5 my-2 border-b border-gray-50/10  text-[12px]">
          <p className="text-[14px] font-semibold">
            How long can I earn on a referral?
          </p>
          <div>
            <Image
              src={arrow_down}
              width={39}
              className="px-[14px] py-[16px] gray-gradient rounded-full cursor-pointer"
              alt="cross-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliatePopup;
