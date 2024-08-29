"use client";
import React, { useState } from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import ToggleButton from "../ChildComponents/ToggleButton";

function BuyInPopup({ isVisible, handleClose, setSitBtn }) {
  const [isChecked, setIsChecked] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleMinClick = () => {
    setInputValue(10);
  };
  const handleMaxClick = () => {
    setInputValue(30);
  };
  return (
    <>
      <div
        className={`p-3 absolute w-[91%] top-[24%] left-[50%] transform -translate-x-1/2 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-transform duration-200 ease-in-out popup-dark-blue-gradient blue-drop-shadow rounded-3xl`}
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-[32px] font-bold">BUY IN</h2>
          <button onClick={handleClose}>
            <Image
              src={cross}
              width={40}
              className="p-3 gray-gradient rounded-full"
              alt="cross-logo"
            />
          </button>
        </div>

        <div className="my-4">
          <p className="text-[12px] font-extralight ">
            Your Balance:{" "}
            <span className="font-semibold orange-gradient-btn">100.00 $</span>
          </p>
          <p className="text-[12px] font-extralight ">
            This place is reserved for you for:{" "}
            <span className="font-semibold orange-gradient-btn">00.59</span>
          </p>
        </div>

        <div className="flex justify-between gray-gradient py-4 w-full px-4 rounded-[15px]">
          <input
            type="text"
            className="bg-transparent outline-none w-full"
            value={inputValue}
            onChange={handleInputChange}
          />

          <div className="flex">
            <div className="rounded-gray-bg px-2.5 py-1 mr-2 rounded-[30px] cursor-pointer">
              <span onClick={handleMinClick} className=" font-semibold">
                MIN
              </span>
            </div>
            <div className="rounded-gray-bg px-2.5 py-1  rounded-[30px] cursor-pointer">
              <span onClick={handleMaxClick} className=" font-semibold">
                MAX
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between my-3">
          <p className="text-[12px] font-extralight ">
            Auto buy-in to max stack in every hand
          </p>
          <ToggleButton isOpen={false} />
        </div>

        <div
          className="my-4"
          onClick={() => {
            setSitBtn(true);
            handleClose();
          }}
        >
          <div className="orange-btn-md py-[10px] dark-blue-gradient text-center">
            <button className="orange-gradient-btn text-[16px] font-bold">
              TAKE A SEAT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyInPopup;
