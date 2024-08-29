import React from "react";
import Image from "next/image";

import LeftArrow from "../assets/icons/rightarrow.svg";
import Affiliate from "../assets/icons/affiliate.svg";
import News from "../assets/icons/pokerply-news.svg";
import Chat from "../assets/icons/chat-support.svg";
import User from "../assets/icons/user-agreement.svg";

import RightArrowCircle from "./ChildComponents/RightArrowCircle";

function More({ onClick }) {
  return (
    <>
      <div className="mt-6 overflow-auto hide-scrollbar h-[36vh]">
        <div className="flex items-center justify-between my-2.5">
          <div className="flex">
            <div className="p-3 rounded-full gray-gradient blue-drop-shadow">
              <Image src={Affiliate} width={20} alt="arrow-logo" />
            </div>
            <div className="ml-4">
              <p className="text-[14px] ">Affiliate Program</p>
              <p className="text-[12px] text-white/30 mt-1">Earn $$$</p>
            </div>
          </div>
          <div onClick={onClick} className="cursor-pointer">
            <RightArrowCircle />
          </div>
        </div>
        <div className="h-[1px] bg-white/20 my-1"></div>

        <div className="flex items-center justify-between my-2.5">
          <div className="flex">
            <div className="p-3 rounded-full gray-gradient blue-drop-shadow">
              <Image src={News} width={20} alt="arrow-logo" />
            </div>
            <div className="ml-4">
              <p className="text-[14px] ">POKCRPLY News</p>
              <p className="text-[12px] text-white/30 mt-1">
                t.me/POKCRPLY Room
              </p>
            </div>
          </div>
          <RightArrowCircle href="" />
        </div>
        <div className="h-[1px] bg-white/20 my-1"></div>

        <div className="flex items-center justify-between my-2.5">
          <div className="flex">
            <div className="p-3 rounded-full gray-gradient blue-drop-shadow">
              <Image src={Chat} width={20} alt="arrow-logo" />
            </div>

            <div className="ml-4">
              <p className="text-[14px] ">Chat With Support</p>
              <p className="text-[12px] text-white/30 mt-1">
                t.me/POKCRPLY HelpBot
              </p>
            </div>
          </div>
          <RightArrowCircle href="" />
        </div>
        <div className="h-[1px] bg-white/20 my-1"></div>

        <div className="flex items-center justify-between my-2.5">
          <div className="flex">
            <div className="p-3 rounded-full gray-gradient blue-drop-shadow">
              <Image src={User} width={20} alt="arrow-logo" />
            </div>
            <div className="ml-4">
              <p className="text-[14px] ">User Agreement</p>
              <p className="text-[12px] text-white/30 mt-1">Last Updated</p>
            </div>
          </div>
          <RightArrowCircle href="" />
        </div>
        <div className="h-[1px] bg-white/20 my-1"></div>
      </div>
    </>
  );
}

export default More;
