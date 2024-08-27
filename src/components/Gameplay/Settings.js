"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import ToggleButton from "../ChildComponents/ToggleButton";
import VolumeButton from "../ChildComponents/VolumeButton";

function Settings({ isVisible }) {
  return (
    <>
      <div
        className={`p-4 absolute w-[64%] top-[15%] left-[68%] overflow-auto hide-scrollbar  bg-[#040e2b] bg-opacity-70  backdrop-blur-[13px] transform -translate-x-1/2 z-[1000]  ${
          isVisible
            ? "translate-y-0 opacity-100 "
            : "translate-y-[700px] opacity-0 pointer-events-none"
        } transition-all duration-200 ease-in-out blue-drop-shadow rounded-3xl`}
      >
        <div>
          <VolumeButton />
        </div>

        <div className="my-3">
          <div className="my-4 flex items-center justify-between">
            <p className="text-[13px] font-light">Fold/Check</p>
            <div>
              <ToggleButton isOpen={true} />{" "}
            </div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <p className="text-[13px] font-light">Game chat</p>
            <div>
              <ToggleButton isOpen={true} />{" "}
            </div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <p className="text-[13px] font-light">Robbit hunt</p>
            <div>
              <ToggleButton isOpen={false} />{" "}
            </div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <p className="text-[13px] font-light">Four-Color-Deck</p>
            <div>
              <ToggleButton isOpen={false} />{" "}
            </div>
          </div>

          <div className="my-4 flex items-center justify-between">
            <p className="text-[13px] font-light">Values in BB</p>
            <div>
              <ToggleButton isOpen={false} />{" "}
            </div>
          </div>
        </div>
        {/* Buttons */}

        <div>
          <div className="orange-btn-md py-[8px] dark-blue-gradient text-center">
            <button className="orange-gradient-btn text-[15px] font-bold">
              LEDGER
            </button>
          </div>

          <div className="mt-3 orange-btn-md py-[8px] dark-blue-gradient text-center">
            <button className="orange-gradient-btn text-[15px] font-bold">
              AWAY
            </button>
          </div>

          <div className="mt-3 orange-btn-md py-[8px] dark-blue-gradient text-center">
            <button className="orange-gradient-btn text-[15px] font-bold">
              LOBBY
            </button>
          </div>
        </div>

        <p className="text-[12px] mt-3 text-center font-thin tracking-wider">
          0.1.61
        </p>
      </div>
    </>
  );
}

export default Settings;
