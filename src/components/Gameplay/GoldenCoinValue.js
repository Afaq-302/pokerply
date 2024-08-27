import React from "react";
import Image from "next/image";

import Golden_Coin_Heart from "../../assets/icons/gameplay/coin-heart.svg";

function GoldenCoinValue({ value }) {
  return (
    <>
      <div className="bg-white/[16%] flex items-center rounded-[50px] mb-2 absolute top-[28%]">
        {" "}
        <Image src={Golden_Coin_Heart} alt="coin-heart-logo" />
        <span className="text-[12px] font-medium py-1 px-2 ">{value}</span>
      </div>
    </>
  );
}

export default GoldenCoinValue;
