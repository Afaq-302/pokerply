import React from "react";
import Image from "next/image";

import Golden_Card from "../../assets/icons/cards/golden-card.svg";
import Person from "../../assets/icons/gameplay/person.png";
import Person2 from "../../assets/icons/gameplay/person2.png";

import Spades_2 from "../../assets/icons/cards/spades/spades2.svg";
import Heart_A from "../../assets/icons/cards/hearts/hearta.svg";

import Fold from "../../assets/icons/gameplay/fold.png";

const RecentPlayer = ({ showCards }) => {
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center">
          {showCards ? (
            <>
              <Image
                src={Golden_Card}
                width={14}
                className="mb-[-4px] blue-drop-shadow"
                alt="golden-card"
              />
              <Image
                src={Golden_Card}
                width={14}
                className="ml-[-4px] mb-[-4px] blue-drop-shadow"
                alt="golden-card"
              />
            </>
          ) : (
            ""
          )}
        </div>

        <div className="flex items-center relative">
          <div className=" bg-black/80 w-[50px] border-[1px] border-white/30 rounded-[5px]">
            <div className="text-[6.5px] font-extralight text-white/60 pl-1.5 py-[1px]  border-b border-white/30">
              <span className="">Player 3</span>
            </div>
            <div className="text-[8px] font-medium  pl-1.5 py-[1px] ">
              <span className="">12.34</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPlayer;
