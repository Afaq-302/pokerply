/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import Channel_News from "../assets/icons/channel-news.png";
import Channel_Update from "../assets/icons/channel-update.png";

import Heart_Lg from "../assets/icons/heart-lg.png";

import Cash_Logo from "../assets/icons/cash.png";
import Invite_Friends from "../assets/icons/invite.png";
import Tickets from "../assets/icons/tickets.png";
import More_logo from "../assets/icons/more.png";

import Cash from "@/components/Cash";
import Free from "@/components/Free";
import Tourneys from "@/components/Tourneys";
import More from "@/components/More";

import HistoryPopup from "@/components/HistoryPopup";
import AffiliatePopup from "@/components/AffiliatePopup";
import Deposit from "@/components/Deposit/DepositPopup";
import Withdraw from "@/components/WithdrawPopup";
import Header from "@/components/partials/Header";

const Home = () => {
  const [selectedGame, setSelectedGame] = useState("cash");
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [isAffiliateVisible, setIsAffiliateVisible] = useState(false);
  const [isDepositVisible, setIsDepositVisible] = useState(false);
  const [isWithdrawVisible, setIsWithdrawVisible] = useState(false);
  const [isDepositWith, setIsDepositWith] = useState(false);

  const handleStateChange = (setter, value) => {
    setter(value);
  };
  // Toggle a boolean value
  const handleToggle = () => handleStateChange(setIsChecked, !isChecked);

  // Set a specific value
  const handleClick = (item) => handleStateChange(setSelectedGame, item);

  // Open or close history
  const handleHistoryClick = () => handleStateChange(setIsHistoryVisible, true);
  const handleHistoryClose = () =>
    handleStateChange(setIsHistoryVisible, false);

  // Open or close affiliate
  const handleAffiliateClick = () =>
    handleStateChange(setIsAffiliateVisible, true);
  const handleAffiliateClose = () =>
    handleStateChange(setIsAffiliateVisible, false);

  // Open or close deposit
  const handleDepositClick = () => handleStateChange(setIsDepositVisible, true);
  const handleDepositClose = () =>
    handleStateChange(setIsDepositVisible, false);

  // Open or close withdraw
  const handleWithdrawClick = () =>
    handleStateChange(setIsWithdrawVisible, true);

  const handleWithdrawClose = () =>
    handleStateChange(setIsWithdrawVisible, false);

  const handleDepositWithClose = () => {
    handleStateChange(setIsDepositWith, false);
    handleStateChange(setIsDepositVisible, false);
  };

  const popupsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the ref, close all popups
      if (popupsRef.current && !popupsRef.current.contains(event.target)) {
        setIsHistoryVisible(false);
        setIsAffiliateVisible(false);
        setIsDepositVisible(false);
        setIsWithdrawVisible(false);
        setIsDepositWith(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* HEADER TOP SECTION */}
      <section
        id="main-section"
        className={`relative  ${
          isHistoryVisible ||
          isAffiliateVisible ||
          isDepositVisible ||
          isWithdrawVisible ||
          isDepositWith
            ? " blur-[7px]"
            : ""
        }`}
      >
        <Header />

        {/* 2nd SECTION */}
        <section className="h-[182px] px-[16px] py-[14px] gray-gradient rounded-[15px] relative">
          <div className="absolute top-[-40px] right-[-2px] z-[0] pointer-events-none">
            <Image
              src={Heart_Lg}
              width={235}
              alt="heart-logo-lg"
              className=" transform -skew-y-[4deg]"
            />
          </div>
          <div className="z-[10] flex flex-col justify-around space-y-4">
            <div>
              <span className="text-[16px] font-bold">You Chips</span>
              <span className="rounded-gray-bg green-dot rounded-3xl pl-5 pr-2.5 ml-4">
                UQXR-77
              </span>
            </div>

            <p className="text-[40px] font-bold">$0.00</p>
            <div className="flex flex-row justify-between z-[2]">
              <div
                onClick={handleDepositClick}
                className={` ${
                  isHistoryVisible ||
                  isDepositVisible ||
                  isDepositWith ||
                  isWithdrawVisible ||
                  isAffiliateVisible
                    ? "pointer-events-none"
                    : ""
                } orange-btn-md px-6 py-2 dark-blue-gradient`}
              >
                <button className="orange-gradient-btn text-[12px] font-semibold">
                  Deposit
                </button>
              </div>
              <div
                onClick={handleWithdrawClick}
                className={` ${
                  isHistoryVisible ||
                  isDepositVisible ||
                  isDepositWith ||
                  isWithdrawVisible ||
                  isAffiliateVisible
                    ? "pointer-events-none"
                    : ""
                } orange-btn-md px-6 py-2 dark-blue-gradient`}
              >
                <button className="orange-gradient-btn text-[12px] font-semibold">
                  Withdraw
                </button>
              </div>
              <div
                onClick={handleHistoryClick}
                className={` ${
                  isHistoryVisible ||
                  isDepositVisible ||
                  isDepositWith ||
                  isWithdrawVisible ||
                  isAffiliateVisible
                    ? "pointer-events-none"
                    : ""
                } orange-btn-md px-6 py-2 dark-blue-gradient`}
              >
                <button className="orange-gradient-btn text-[12px] font-semibold">
                  History
                </button>
              </div>
            </div>
          </div>

          {/* <button className="orange-gradient-btn">Click me!</button> */}
        </section>

        {/* THIRD SECTION */}
        <section className=" overflow-x-scroll hide-scrollbar touch-pan-x -mr-[15px]">
          <div className="flex min-w-[640px]">
            {/* <Image
            src={Channels}
            alt="channels-logo"
            className="min-w-[65%] relative right-[18px]"
          /> */}
            <div className="flex justify-between pl-3 py-[14px] w-[287px] h-[130px] gray-gradient my-4 rounded-[20px] mr-4">
              <div
                onClick={handleAffiliateClick}
                className={` ${
                  isHistoryVisible ||
                  isDepositVisible ||
                  isDepositWith ||
                  isWithdrawVisible ||
                  isAffiliateVisible
                    ? "pointer-events-none"
                    : ""
                } flex flex-col justify-between items-start`}
              >
                <h3 className="font-bold text-[14px]">
                  Don't Miss Hot News. <br />
                  Join Our Channel
                </h3>
                <div className="orange-btn-md px-6 py-2 dark-blue-gradient">
                  <button className="orange-gradient-btn text-[12px] font-semibold">
                    Join
                  </button>
                </div>
              </div>

              <div>
                <Image
                  src={Channel_News}
                  width={120}
                  className="mt-[-8px] ml-auto"
                  alt="channel-news"
                />
              </div>
            </div>

            <div className="flex justify-between pl-3 py-[14px] w-[287px] h-[130px] gray-gradient my-4 rounded-[20px] mr-4">
              <div className="flex flex-col justify-between  items-start">
                <h3 className="font-bold text-[14px]">
                  Don't Miss Hot News. <br />
                  Join Our Channel
                </h3>
                <div className="orange-btn-md px-6 py-2 dark-blue-gradient">
                  <button className="orange-gradient-btn text-[12px] font-semibold">
                    Join
                  </button>
                </div>
              </div>

              <div>
                <Image
                  src={Channel_Update}
                  width={120}
                  className="mt-[-8px] ml-auto"
                  alt="channel-update"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4TH SECTION */}
        <section className="flex flex-row justify-between">
          <div
            onClick={() => handleClick("cash")}
            className={`${
              selectedGame == "cash" ? "gray-gradient" : ""
            }  relative rounded-[15px] flex flex-col items-center w-[78px] h-[90px] cursor-pointer`}
          >
            <div className="relative w-[85px] h-[85px]">
              <Image
                src={Cash_Logo}
                alt="cash-logo"
                className="absolute top-[-8px] left-[8px] w-[100%] pointer-events-none"
              />
            </div>
            <p className="text-[12px] font-normal relative top-[-4px]">Cash</p>
          </div>

          <div
            onClick={() => handleClick("free")}
            className={`${
              selectedGame == "free" ? "gray-gradient" : ""
            } relative rounded-[15px] flex flex-col items-center justify-between w-[78px] h-[90px] cursor-pointer`}
          >
            <div className=" relative w-[100px] h-[100px]">
              <Image
                src={Invite_Friends}
                alt="heart-logo-sm"
                className="absolute top-[-4px] left-[8px] w-[100%] pointer-events-none"
              />
            </div>
            <p className="text-[12px] font-normal relative top-[-4px]">Free</p>
          </div>

          <div
            onClick={() => handleClick("tourneys")}
            className={`${
              selectedGame == "tourneys" ? "gray-gradient" : ""
            } relative rounded-[15px] flex flex-col items-center w-[78px] h-[90px] cursor-pointer`}
          >
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={Tickets}
                alt="heart-logo-sm"
                className="absolute top-[-7px] left-[11px] w-[100%] pointer-events-none"
              />
            </div>
            <p className="text-[12px] font-normal relative top-[-4px]">
              Tourneys
            </p>
          </div>

          <div
            onClick={() => handleClick("more")}
            className={`${
              selectedGame == "more" ? "gray-gradient" : ""
            } relative rounded-[15px] flex flex-col items-center w-[78px] h-[90px] cursor-pointer`}
          >
            <div className="relative w-[80px] h-[80px]">
              <Image
                src={More_logo}
                alt="more-logo"
                className="absolute top-[-3px] left-[1px] w-[100%] pointer-events-none"
              />
            </div>
            <p className="text-[12px] font-normal relative top-[-4px]">More</p>
          </div>
        </section>
      </section>

      {/* <div className="h-[220px] overflow-auto hide-scrollbar mt-3"> */}
      {selectedGame === "cash" && <Cash />}
      {selectedGame === "free" && <Free />}
      {selectedGame === "tourneys" && <Tourneys />}
      {selectedGame === "more" && <More onClick={handleAffiliateClick} />}

      {/* </div> */}
      <div ref={popupsRef}>
        <HistoryPopup
          isVisible={isHistoryVisible}
          onClose={handleHistoryClose}
        />
        <AffiliatePopup
          isVisible={isAffiliateVisible}
          onClose={handleAffiliateClose}
        />
        <Deposit
          isVisible={isDepositVisible}
          onClose={handleDepositClose}
          isDepositWith={isDepositWith}
          setIsDepositWith={setIsDepositWith}
          handleDepositWithClose={handleDepositWithClose}
        />
        <Withdraw isVisible={isWithdrawVisible} onClose={handleWithdrawClose} />
      </div>
    </>
  );
};

export default Home;
