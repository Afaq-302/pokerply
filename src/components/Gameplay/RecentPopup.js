"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import Person from "../../assets/icons/gameplay/person.png";
import Send_Message from "../../assets/icons/gameplay/send.png";
import RecentGameTable from "./RecentGameTable";

function RecentPopup({ isVisible, handleClose }) {
  const players = ["Player 1", "Player 2"];

  return (
    <>
      <div
        className={`p-3 absolute w-[91%] h-[580px] overflow-auto hide-scrollbar top-[14%] left-[50%] bg-[#040e2b] bg-opacity-70  backdrop-blur-[12px] transform -translate-x-1/2 z-[1000]  ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-transform duration-200 ease-in-out blue-drop-shadow rounded-3xl`}
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-[24px] font-bold">Recent Hands</h2>
          <button onClick={handleClose}>
            <Image
              src={cross}
              width={37}
              className="p-3 gray-gradient rounded-full"
              alt="cross-logo"
            />
          </button>
        </div>

        <div className="my-3">
          <RecentGameTable
            coinValue={"+ 1.23"}
            players={[1, 2, 3, 4, 5, 6, 7, 8]}
            gameNumber={236}
          />
          <RecentGameTable
            coinValue={"+ 1.23"}
            players={[1, 2, 3, 4, 5, 6, 7, 8]}
            gameNumber={235}
          />
        </div>
      </div>
    </>
  );
}

export default RecentPopup;
