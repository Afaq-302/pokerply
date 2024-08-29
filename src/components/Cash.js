"use client";
import React, { useState } from "react";
import Image from "next/image";

import Orange_Heart_sm from "../assets/icons/orange-heart-sm.svg";
import Link from "next/link";
import ToggleButton from "./ChildComponents/ToggleButton";

function Cash() {
  const [isChecked, setIsChecked] = useState(true);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const gameDetails = [
    {
      title: "Blinds",
      details: ["$1.00", "$2.00"],
    },
    {
      title: "Buy-in",
      details: ["$100.00", "$200.00"],
    },
    {
      title: "Players",
      details: ["0/4"],
    },
    {
      title: "Button",
      link: "/gameplay",
      buttonText: "SIT",
    },
  ];
  const [active, setActive] = useState("High"); // Default active item

  // Function to handle click events and set active item
  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <>
      {/* 5th SECTION */}
      {/* GAME, LIMITS, Sit Now */}
      <div className="flex justify-center items-center my-2 text-[12px]">
        <div className="text-white/40">Game</div>
        <div className="text-white/40 ml-16">Limits</div>
        <div className="text-white/40 ml-auto">Sit Now</div>
      </div>

      <div className="flex flex-row items-center justify-between text-[14px]">
        <div className="">
          <div>
            <span className="rounded-gray-bg px-2.5 pr-2.5 rounded-[15px]">
              NLH
              <Image
                src={Orange_Heart_sm}
                width={15}
                alt="heart-logo-sm"
                className="ml-2"
              />
            </span>
          </div>
        </div>

        <div
          onClick={() => handleClick("All")}
          className={`cursor-pointer ${
            active === "All" ? "rounded-gray-bg " : ""
          } px-2.5 py-1 rounded-2xl`}
        >
          <span
            className={`${
              active === "All" ? "orange-gradient-btn " : ""
            }  font-medium`}
          >
            All
          </span>
        </div>

        <div
          onClick={() => handleClick("Low")}
          className={`cursor-pointer ${
            active === "Low" ? "rounded-gray-bg " : ""
          } px-2.5 py-1 rounded-2xl`}
        >
          <span
            className={`${
              active === "Low" ? "orange-gradient-btn " : ""
            }  font-medium`}
          >
            Low
          </span>
        </div>

        <div
          onClick={() => handleClick("Mid")}
          className={`cursor-pointer ${
            active === "Mid" ? "rounded-gray-bg " : ""
          } px-2.5 py-1 rounded-2xl`}
        >
          <span
            className={`${
              active === "Mid" ? "orange-gradient-btn " : ""
            }  font-medium`}
          >
            Mid
          </span>
        </div>

        <div
          onClick={() => handleClick("High")}
          className={`cursor-pointer ${
            active === "High" ? "rounded-gray-bg " : ""
          } px-2.5 py-1 rounded-2xl`}
        >
          <span
            className={`${
              active === "High" ? "orange-gradient-btn " : ""
            }  font-medium`}
          >
            High
          </span>
        </div>

        <ToggleButton isOpen={true} />
      </div>

      <div className=" overflow-auto hide-scrollbar mt-3 h-[31vh]">
        {/* {gameDetails.map( (game,index) => {
          return (
            <>
              <section className="relative px-6 py-3 bg-gray-300 h-[100px] gray-gradient mt-2 rounded-[20px] border-l-[26px] border-l-[#00A1FF]"></section>
            </>
          );
        })} */}

        <section className="relative px-6 py-3 bg-gray-300 h-[100px] gray-gradient mt-2 rounded-[20px] border-l-[26px] border-l-[#00A1FF]">
          <span className="absolute top-[40%] left-[-34px] transform  -rotate-90 font-medium">
            HIGH
          </span>

          <div className="grid grid-cols-4 text-[14px]">
            <div className="">
              <h3>Blinds</h3>
              <p className="mt-1.5 text-[12px] text-white">$1.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$2.00</p>
            </div>
            <div className="">
              <h3>Buy-in</h3>
              <p className="mt-1.5 text-[12px] text-white">$100.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$200.00</p>
            </div>
            <div className="">
              <h3>Players</h3>
              <p className="mt-2.5">0/4</p>
            </div>
            <Link
              href="/gameplay"
              className="orange-btn-md dark-blue-gradient px-[15px] py-[2.5px] ml-auto my-auto"
            >
              <button className="orange-gradient-btn font-bold">SIT</button>
            </Link>
          </div>
        </section>
        <section className=" relative px-6 py-3 bg-gray-300 h-[100px] gray-gradient mt-2 rounded-[20px] border-l-[26px] border-l-[#00A1FF]">
          <span className="absolute top-[40%] left-[-34px] transform  -rotate-90 font-medium">
            HIGH
          </span>

          <div className="grid grid-cols-4 text-[14px]">
            <div className="">
              <h3>Blinds</h3>
              <p className="mt-1.5 text-[12px] text-white">$1.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$2.00</p>
            </div>
            <div className="">
              <h3>Buy-in</h3>
              <p className="mt-1.5 text-[12px] text-white">$100.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$200.00</p>
            </div>
            <div className="">
              <h3>Players</h3>
              <p className="mt-2.5">0/4</p>
            </div>
            <div className="orange-btn-md dark-blue-gradient px-[15px] py-[2.5px] ml-auto my-auto">
              <button className="orange-gradient-btn font-bold">SIT</button>
            </div>
          </div>
        </section>
        <section className=" relative px-6 py-3 bg-gray-300 h-[100px] gray-gradient mt-2 rounded-[20px] border-l-[26px] border-l-[#00A1FF]">
          <span className="absolute top-[40%] left-[-34px] transform  -rotate-90 font-medium">
            HIGH
          </span>

          <div className="grid grid-cols-4 text-[14px]">
            <div className="">
              <h3>Blinds</h3>
              <p className="mt-1.5 text-[12px] text-white">$1.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$2.00</p>
            </div>
            <div className="">
              <h3>Buy-in</h3>
              <p className="mt-1.5 text-[12px] text-white">$100.00</p>
              <p className="mt-1.5 text-[12px] text-white/40">$200.00</p>
            </div>
            <div className="">
              <h3>Players</h3>
              <p className="mt-2.5">0/4</p>
            </div>
            <div className="orange-btn-md dark-blue-gradient px-[15px] py-[2.5px] ml-auto my-auto">
              <button className="orange-gradient-btn font-bold">SIT</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cash;
