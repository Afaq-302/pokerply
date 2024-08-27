import React from "react";
import Image from "next/image";

import Golden_Card from "../../assets/icons/cards/golden-card.svg";
import Person from "../../assets/icons/gameplay/person.png";
import Person2 from "../../assets/icons/gameplay/person2.png";

import Spades_2 from "../../assets/icons/cards/spades/spades2.svg";
import Heart_A from "../../assets/icons/cards/hearts/hearta.svg";

import Fold from "../../assets/icons/gameplay/fold.png";

const PlayerCard = ({ playerName, right, fold }) => {
  return (
    <>
      {right ? (
        <div className="relative">
          <div className="flex items-center justify-center">
            {fold ? (
              <div className="p-2.5 flex flex-col items-center justify-center rounded-full gray-gradient blue-drop-shadow">
                <Image src={Fold} width={12} alt="go-back-logo" />
                <p className="text-[12px] font-extralight">FOLD</p>
              </div>
            ) : (
              <>
                <Image
                  src={Golden_Card}
                  width={30}
                  className="blue-drop-shadow"
                />
                <Image
                  src={Golden_Card}
                  width={30}
                  className="ml-[-8px] blue-drop-shadow"
                />
              </>
            )}
          </div>

          <div className="flex items-center relative top-[-10px] left-[20px]">
            <div className=" bg-black/80 w-[80px] border-[1px] border-white/30 rounded-[10px]">
              <div className="text-[10px] font-light text-white/60 pl-1.5 py-[1px]  border-b border-white/30">
                <span className="">{playerName}</span>
              </div>
              <div className="text-[10px] font-medium  pl-1.5 py-[1px] ">
                <span className="">12.34</span>
              </div>
            </div>

            <Image
              src={Person2}
              width={40}
              className="relative left-[-10px] "
              alt="person-image"
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="flex items-center justify-center relative left-[15px]">
            {fold ? (
              <div className="p-2.5 flex flex-col items-center justify-center rounded-full gray-gradient blue-drop-shadow">
                <Image src={Fold} width={12} alt="go-back-logo" />
                <p className="text-[12px] font-extralight">FOLD</p>
              </div>
            ) : (
              <>
                <Image src={Spades_2} width={30} className="blue-drop-shadow" />
                <Image
                  src={Heart_A}
                  width={30}
                  className="ml-[-8px] blue-drop-shadow"
                />
              </>
            )}
          </div>

          <div className="flex items-center relative top-[-10px] right-[12px]">
            <Image
              src={Person}
              width={40}
              className="relative right-[-6px] "
              alt="person-image"
            />
            <div className="bg-black/80 w-[80px] border-[1px] border-white/30 rounded-[10px]">
              <div className="text-[10px] font-light text-white/60 pl-2 py-[1px] border-b border-white/30">
                <span className="">{playerName}</span>
              </div>
              <div className="text-[10px] font-medium pl-2 py-[1px]">
                <span className="">12.34</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
