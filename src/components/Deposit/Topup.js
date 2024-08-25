import React from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import QR_Code from "../../assets/icons/qr.svg";

function TopUp({ isTopup, onClose }) {
  return (
    <div
      className={`px-4 transform -translate-x-1/2  z-[1000] popup-fitscreen  ${
        isTopup ? "translate-y-0 opacity-100" : "translate-y-[700px] opacity-0"
      } transition-transform duration-200 ease-in-out h-[83vh] popup-dark-blue-gradient shadow-lg rounded-t-3xl`}
    >
      <div className="flex justify-between items-center py-4">
        <h2 className="text-[32px] font-bold">TOP UP</h2>
        <button onClick={onClose}>
          <Image
            src={cross}
            width={40}
            className="p-3 gray-gradient rounded-full"
            alt="cross-logo"
          />
        </button>
      </div>

      <div className="px-14">
        <p className="text-[12px] font-extralight text-center">
          ETH will be converted to USDT TRC-20
        </p>
        <p className="text-[12px] font-extralight text-center mt-1">
          Estimated rate: 1ETH = from $1307.46
        </p>

        <div className="flex flex-col items-center my-6 mx-auto gray-gradient rounded-[15px]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[12px] font-medium">MIN ANOUNTH</span>
              <span className="text-[12px] font-medium">0.0258453</span>
            </div>
            <Image
              src={QR_Code}
              width={180}
              className="my-3 mx-auto"
              alt="qr-code"
            />
            <p className="text-[12px] font-extralight text-center">
              0x8E8EB0e633206ddB596751 E380Df949cb245EeEe
            </p>
          </div>

          <button className="h-[39px] w-full bg-[#6379E4] mt-auto rounded-b-[15px] text-[14px] font-semibold">
            COPY ADDRESS
          </button>
        </div>
      </div>
      <p className="px-[22px] text-[12px] font-extralight text-center ">
        To avoid assets loss, you have to send 0.0024745 ETH minimum. The less
        the amount of transaction, the worse the exchange rate.
      </p>
    </div>
  );
}

export default TopUp;
