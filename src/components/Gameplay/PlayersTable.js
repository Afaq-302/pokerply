import React from "react";
import Image from "next/image";

import Bg_Heart from "../../assets/icons/gameplay/blue-heart.svg";

import Golden_Card from "../../assets/icons/cards/golden-card.svg";
import Spades_2 from "../../assets/icons/cards/spades/spades2.svg";
import Heart_A from "../../assets/icons/cards/hearts/hearta.svg";
import Diamond_A from "../../assets/icons/cards/diamonds/diamonda.svg";

import PlayerCard from "./PlayerCard";
import GoldenCoinValue from "./GoldenCoinValue";

const PlayersTable = ({ players }) => {
  return (
    <>
      <div>
        <div className="absolute inset-0 flex items-center justify-center rounded-[128px] gray-gradient blue-drop-shadow">
          <div className="w-[260px] h-[93%] relative table-inner-orange-shadow border-2 border-yellow-400 rounded-[113px] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <GoldenCoinValue value={1.23} />
              <Image
                src={Bg_Heart}
                alt="blue-heart-logo"
                className="opacity-50 mt-12"
              />
            </div>
            <div className="absolute flex flex-row">
              <Image
                src={Diamond_A}
                width={30}
                className="mx-1.5"
                alt="golden-card"
              />
              <Image
                src={Spades_2}
                width={30}
                className="mx-1.5"
                alt="golden-card"
              />
              <Image
                src={Heart_A}
                width={30}
                className="mx-1.5 opacity-70"
                alt="golden-card"
              />
              <Image
                src={Golden_Card}
                width={30}
                className="mx-1.5 "
                alt="golden-card"
              />
              <Image
                src={Golden_Card}
                width={30}
                className="mx-1.5"
                alt="golden-card"
              />
            </div>
          </div>

          {players.length === 2 && (
            <>
              <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2">
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div className="absolute bottom-[-50px] left-[46%] transform -translate-x-1/2">
                <PlayerCard playerName={"You"} right={false} fold={false} />
              </div>
            </>
          )}
          {players.length === 4 && (
            <>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
                <PlayerCard playerName={"You"} right={false} fold={false} />
              </div>
              <div className="absolute left-[-50px] top-[70%] transform -translate-y-1/2">
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div className="absolute right-[-50px] top-[70%] transform -translate-y-1/2">
                <PlayerCard playerName={"You"} right={false} fold={false} />
              </div>
            </>
          )}
          {players.length === 6 && (
            <>
              <div className="absolute grid gap-4 w-full h-full">
                {/* 1st row: 1 item centered */}
                <div className="flex items-start justify-center relative bottom-[22px]">
                  <PlayerCard
                    playerName={"Player 1"}
                    right={true}
                    fold={false}
                  />
                </div>

                {/* 2nd row: 2 items justify-between */}
                <div className="flex items-start justify-between mt-[-30px] mx-[-50px]">
                  <PlayerCard
                    playerName={"Player 2"}
                    right={true}
                    fold={false}
                  />
                  <PlayerCard
                    playerName={"Player 3"}
                    right={false}
                    fold={false}
                  />
                </div>

                {/* 3rd row: 2 items justify-between */}
                <div className="flex items-end justify-between mb-[-30px] mx-[-50px]">
                  <PlayerCard
                    playerName={"Player 4"}
                    right={true}
                    fold={false}
                  />
                  <PlayerCard
                    playerName={"Player 5"}
                    right={false}
                    fold={false}
                  />
                </div>

                {/* 4th row: 1 item centered */}
                <div className="flex items-end justify-center relative top-[22px]">
                  <PlayerCard playerName={"You"} right={false} fold={false} />
                </div>
              </div>
              {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {players[0]}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              {players[1]}
            </div>
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2">
              {players[2]}
            </div>
            <div className="absolute left-0 bottom-1/4 transform translate-y-1/2">
              {players[3]}
            </div>
            <div className="absolute right-0 top-1/4 transform -translate-y-1/2">
              {players[4]}
            </div>
            <div className="absolute right-0 bottom-1/4 transform translate-y-1/2">
              {players[5]}
            </div> */}
            </>
          )}
          {players.length === 8 && (
            <>
              <div className="absolute left-[-40px] bottom-[5%]">
                <PlayerCard playerName={"Player 1"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-60px] bottom-[30%]">
                <PlayerCard playerName={"Player 2"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-60px] top-[20%]">
                <PlayerCard playerName={"Player 3"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-18px] top-[-30px]">
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div className="absolute right-[-18px] top-[-30px]">
                <PlayerCard
                  playerName={"Player 5"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-60px] top-[20%]">
                <PlayerCard
                  playerName={"Player 6"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-60px] bottom-[30%]">
                <PlayerCard
                  playerName={"Player 7"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-40px] bottom-[5%]">
                <PlayerCard playerName={"You"} right={false} fold={false} />
              </div>
            </>
          )}
          {/* {players.length === 9 && (
          <>
            <div className="absolute tables grid grid-cols-2 gap-y-20 justify-between w-full h-full">
              <div>
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div>{players[1]}</div>
              <div>{players[2]}</div>
              <div>{players[3]}</div>
              <div>{players[4]}</div>
              <div>{players[5]}</div>
              <div>{players[6]}</div>
              <div>{players[7]}</div>
              <div>{players[8]}</div>
            </div>
          </>
        )} */}

          {players.length === 9 && (
            <>
              <div className="absolute left-[-40px] bottom-[5%]">
                <PlayerCard playerName={"Player 1"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-60px] bottom-[30%]">
                <PlayerCard playerName={"Player 2"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-60px] top-[20%]">
                <PlayerCard playerName={"Player 3"} right={true} fold={false} />
              </div>
              <div className=" absolute left-[-18px] top-[-30px]">
                <PlayerCard playerName={"Player 4"} right={true} fold={false} />
              </div>
              <div className="absolute right-[-18px] top-[-30px]">
                <PlayerCard
                  playerName={"Player 5"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-50px] top-[20%]">
                <PlayerCard
                  playerName={"Player 6"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-50px] bottom-[30%]">
                <PlayerCard
                  playerName={"Player 7"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute right-[-35px] bottom-[5%]">
                <PlayerCard
                  playerName={"Player 8"}
                  right={false}
                  fold={false}
                />
              </div>
              <div className="absolute  bottom-[-60px]">
                <PlayerCard playerName={"You"} right={false} fold={false} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PlayersTable;
