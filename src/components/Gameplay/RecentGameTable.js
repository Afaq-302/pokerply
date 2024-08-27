import React from "react";
import Image from "next/image";

import Bg_Heart from "../../assets/icons/gameplay/blue-heart.svg";
import Golden_Coin_Heart from "../../assets/icons/gameplay/coin-heart.svg";

import Golden_Card from "../../assets/icons/cards/golden-card.svg";
import Spades_2 from "../../assets/icons/cards/spades/spades2.svg";
import Heart_A from "../../assets/icons/cards/hearts/hearta.svg";
import Diamond_A from "../../assets/icons/cards/diamonds/diamonda.svg";
import RecentPlayer from "./RecentPlayer";
import GoldenCoinValue from "./GoldenCoinValue";

function RecentGameTable({ coinValue, players, gameNumber }) {
  return (
    <>
      <div className="my-5">
        <p className="my-1">#{gameNumber}</p>

        <div className="relative w-[86%] h-[163px] mx-auto my-4 flex items-center justify-center rounded-[128px] gray-gradient blue-drop-shadow">
          <div className=" relative w-[95%] h-[91%] table-inner-orange-shadow border-2 border-yellow-400 rounded-[113px] flex items-center justify-center ">
            {/* GOLDEN COIN VALUE */}
            <div className="absolute left-[60%] top-[20%] bg-white/[16%] flex items-center rounded-[50px] mb-2 ">
              {" "}
              <span className="orange-gradient text-[8px] text-black font-bold px-[3px] rounded-[30px]">
                {coinValue}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Bg_Heart}
                width={80}
                alt="blue-heart-logo"
                className="opacity-50"
              />
            </div>
            <div className="absolute flex flex-row">
              <Image
                src={Diamond_A}
                width={17}
                className="mx-1.5"
                alt="golden-card"
              />
              <Image
                src={Spades_2}
                width={17}
                className="mx-1.5"
                alt="golden-card"
              />
              <Image
                src={Heart_A}
                width={17}
                className="mx-1.5 opacity-70"
                alt="golden-card"
              />
              <Image
                src={Diamond_A}
                width={17}
                className="mx-1.5"
                alt="golden-card"
              />
            </div>
          </div>

          {/* PLAYERS */}

          {players.length === 2 && (
            <>
              <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
            </>
          )}
          {players.length === 4 && (
            <>
              <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>

              <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute right-[-25px] top-1/2 transform -translate-y-1/2">
                <RecentPlayer />
              </div>
            </>
          )}

          {players.length === 6 && (
            <>
              <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer showCards={true} />
              </div>
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute left-[-20px] top-1/4 transform -translate-y-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute left-[-20px] bottom-1/4 transform translate-y-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute right-[-25px] top-1/4 transform -translate-y-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute right-[-25px] bottom-1/4 transform translate-y-1/2">
                <RecentPlayer />
              </div>
            </>
          )}

          {players.length === 8 && (
            <>
              <div className="absolute top-[-4px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute bottom-[-6px] left-3/4 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute bottom-[-6px] left-1/4 transform -translate-x-1/2">
                <RecentPlayer />
              </div>

              <div className="absolute left-[-20px] bottom-1/2 transform translate-y-1/2">
                <RecentPlayer showCards={true} />
              </div>
              <div className="absolute right-[-25px] top-1/4 transform -translate-y-1/2">
                <RecentPlayer />
              </div>
              <div className="absolute right-[-25px] bottom-1/2 transform translate-y-1/2">
                <RecentPlayer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default RecentGameTable;
