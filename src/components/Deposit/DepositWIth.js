import React, { useState } from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import Golden_Heart_Sm from "../../assets/icons/coins/heart-golden.svg";
import BTC from "../../assets/icons/coins/btc.svg";
import ETH from "../../assets/icons/coins/eth.svg";
import XRP from "../../assets/icons/coins/xrp.svg";
import ADA from "../../assets/icons/coins/ada.svg";
import XMR from "../../assets/icons/coins/xmr.svg";
import LTC from "../../assets/icons/coins/ltc.svg";
import SOL from "../../assets/icons/coins/sol.svg";
import UNI from "../../assets/icons/coins/uni.svg";

import RightArrowCircle from "../ChildComponents/RightArrowCircle";
import TopUp from "./Topup";

function DepositWith({
  isDepositWith,
  setIsDepositWith,
  onCloseDeposit,
  onClose,
}) {
  const coinsData = [
    { coinName: "BTC", imageSrc: BTC, imageAlt: "xrp-logo" },
    { coinName: "ETH", imageSrc: ETH, imageAlt: "xrp-logo" },
    { coinName: "XRP", imageSrc: XRP, imageAlt: "xrp-logo" },
    { coinName: "ADA", imageSrc: ADA, imageAlt: "ada-logo" },
    { coinName: "XMR", imageSrc: XMR, imageAlt: "xmr-logo" },
    { coinName: "LTC", imageSrc: LTC, imageAlt: "ltc-logo" },
    { coinName: "SOL", imageSrc: SOL, imageAlt: "sol-logo" },
    { coinName: "UNI", imageSrc: UNI, imageAlt: "uni-logo" },
    { coinName: "UNI", imageSrc: UNI, imageAlt: "uni-logo" },
  ];

  const [isToptupVisible, setIsToptupVisible] = useState(false);

  const handleToptupClick = () => {
    setIsToptupVisible(true);
  };

  const handleTopupClose = () => {
    onClose();
    setIsDepositWith();
    onCloseDeposit();
    setIsToptupVisible(false);
  };

  return (
    <>
      <div
        className={`px-4 transform -translate-x-1/2 z-[1000] popup-fitscreen  ${
          isDepositWith
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-transform duration-200 ease-in-out h-[83vh] popup-dark-blue-gradient shadow-lg rounded-t-3xl`}
      >
        <div className="flex justify-between items-center py-4">
          <h2 className="text-[32px] font-bold">DEPOSIT WITH</h2>
          <button onClick={onClose}>
            <Image
              src={cross}
              width={40}
              className="p-3 gray-gradient rounded-full"
              alt="cross-logo"
            />
          </button>
        </div>

        <div className="my-3">
          {/* White Text */}
          <h2 className="text-[18px] font-bold">Featured</h2>

          <div className="flex items-center justify-between my-1.5 border-b border-gray-50/5  py-1 text-[12px]">
            <div>
              <p className="text-[12px] font-semibold flex items-center">
                <span className="mr-4">
                  <Image
                    src={Golden_Heart_Sm}
                    width={27}
                    alt="heart-logo"
                    className="p-[5px] rounded-full gray-gradient blue-drop-shadow"
                  />
                </span>
                POKCPLY COIN
              </p>
            </div>
            <RightArrowCircle href="" />
          </div>
          <div className="flex items-center justify-between my-1.5 border-b border-gray-50/5  py-1 text-[12px]">
            <div>
              <p className="text-[12px] font-semibold flex items-center">
                <span className="mr-4">
                  <Image
                    src={Golden_Heart_Sm}
                    width={27}
                    alt="heart-logo"
                    className="p-[5px] rounded-full gray-gradient blue-drop-shadow"
                  />
                </span>
                FEATURED COIN
              </p>
            </div>
            <RightArrowCircle href="" />
          </div>
        </div>

        <div className="mt-4">
          {/* White Text */}
          <h2 className="text-[18px] font-bold">More Crypto</h2>

          {/* Coins Container */}
          <div className="h-[306px] mt-2.5 overflow-auto hide-scrollbar">
            {/*  Coin row */}
            {coinsData.map((coin, index) => {
              return (
                <div
                  key={index}
                  onClick={handleToptupClick}
                  className="flex items-center justify-between my-1.5 border-b border-gray-50/5 py-1 text-[12px] cursor-pointer"
                >
                  <div>
                    <p className="text-[12px] font-semibold flex items-center">
                      <span className="mr-4">
                        <Image
                          src={coin.imageSrc}
                          width={25}
                          alt={coin.imageAlt}
                          className="blue-drop-shadow"
                        />
                      </span>
                      {coin.coinName}
                    </p>
                  </div>
                  <RightArrowCircle />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <TopUp isTopup={isToptupVisible} onClose={handleTopupClose} />
    </>
  );
}

export default DepositWith;
