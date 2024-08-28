"use client";
import React, { useState } from "react";
import Image from "next/image";

import Header from "@/components/partials/Header";
import PlayersTable from "@/components/Gameplay/PlayersTable";

import Go_Back from "../../assets/icons/gameplay/back.svg";

import Diamond_Card from "../../assets/icons/gameplay/diamond-card.svg";
import Diamond_Card_Selected from "../../assets/icons/gameplay/diamond-card-selected.png";

import Two_Cards from "../../assets/icons/gameplay/two-cards.png";
import Two_Cards_Selected from "../../assets/icons/gameplay/two-cards-selected.png";

import Settings_Logo from "../../assets/icons/gameplay/settings.svg";
import Settings_Selected from "../../assets/icons/gameplay/settings-selected.png";

import Chat from "../../assets/icons/gameplay/chat.png";
import Emoji from "../../assets/icons/gameplay/emoji.png";
import Emoji_Selected from "../../assets/icons/gameplay/emoji-selected.png";

import EmojisPopup from "@/components/Gameplay/EmojisPopup";
import BuyInPopup from "@/components/Gameplay/BuyInPopup";
import Chats from "@/components/Gameplay/Chats";
import Settings from "@/components/Gameplay/Settings";
import BuyChips from "@/components/Gameplay/BuyChips";
import RecentPopup from "@/components/Gameplay/RecentPopup";

import FoldCall from "@/components/Gameplay/FoldCallRaiseCheck";
import BackRaise from "@/components/Gameplay/BackRaise";

export default function Gameplay() {
  const [isEmoji, setIsEmoji] = useState(false);
  const [isBuyInPopup, setIsBuyInPopup] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isBuyChipsOpen, setIsBuyChipsOpen] = useState(false);
  const [isRecentOpen, setIsRecentOpen] = useState(false);
  const [isFoldCall, setIsFoldCall] = useState(false);
  const [isBackRaise, setIsBackRaise] = useState(false);

  const isAnyPopupOpen =
    isEmoji ||
    isBuyInPopup ||
    isChatOpen ||
    isSettingsOpen ||
    isBuyChipsOpen ||
    isRecentOpen ||
    isFoldCall ||
    isBackRaise;

  const handleBuyInPopupClose = () => {
    setIsBuyInPopup(false);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };
  const handleBuyChipsClose = () => {
    setIsBuyChipsOpen(false);
  };

  const handleRecentClose = () => {
    setIsRecentOpen(false);
  };

  const handleEmojiClose = () => {
    setIsEmoji(false);
  };
  const handleFoldCallClose = () => {
    setIsFoldCall(false);
  };
  const handleBackRaiseClose = () => {
    setIsBackRaise(false);
  };

  const players = ["Player 1", "Player 2"];
  return (
    <>
      <section
        className={`relative gameplay-page ${
          isAnyPopupOpen ? "pointer-events-none" : ""
        } ${isBuyInPopup ? "blur-[7px]" : ""}`}
      >
        <Header />
        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
              <div
                onClick={() => setIsBuyInPopup((prevState) => !prevState)}
                className="p-3 rounded-full gray-gradient blue-drop-shadow cursor-pointer"
                style={{
                  pointerEvents:
                    isAnyPopupOpen && !isBuyInPopup ? "none" : "auto",
                  zIndex: 10, // Ensure this is above the overlay
                }}
              >
                <Image src={Go_Back} width={18} alt="go-back-logo" />
              </div>
              <div
                onClick={() => setIsBuyChipsOpen((prevState) => !prevState)}
                className={`${
                  isBuyChipsOpen ? "border-yellow-400" : "border-transparent"
                } border-[1px] p-3.5 ml-3 rounded-full gray-gradient blue-drop-shadow cursor-pointer`}
                style={{
                  pointerEvents:
                    isAnyPopupOpen && !isBuyChipsOpen ? "none" : "auto",
                  zIndex: 10, // Ensure this is above the overlay
                }}
              >
                <Image
                  src={isBuyChipsOpen ? Diamond_Card_Selected : Diamond_Card}
                  width={18}
                  alt="go-back-logo"
                />
              </div>
            </div>

            <div className="flex flex-row items-center">
              <div
                onClick={() => setIsRecentOpen((prevState) => !prevState)}
                className={`${
                  isRecentOpen ? "border-yellow-400" : "border-transparent"
                } border-[1px] p-3.5 rounded-full gray-gradient blue-drop-shadow cursor-pointer`}
                style={{
                  pointerEvents:
                    isAnyPopupOpen && !isRecentOpen ? "none" : "auto",
                  zIndex: 10, // Ensure this is above the overlay
                }}
              >
                <Image
                  src={isRecentOpen ? Two_Cards_Selected : Two_Cards}
                  width={18}
                  alt="go-back-logo"
                />
              </div>
              <div
                onClick={() => setIsSettingsOpen((prevState) => !prevState)}
                className={`border-[1px] p-3.5 ml-3 rounded-full gray-gradient blue-drop-shadow cursor-pointer ${
                  isSettingsOpen ? "border-yellow-400" : "border-transparent"
                }`}
                style={{
                  pointerEvents:
                    isAnyPopupOpen && !isSettingsOpen ? "none" : "auto",
                  zIndex: 10, // Ensure this is above the overlay
                }}
              >
                <Image
                  src={isSettingsOpen ? Settings_Selected : Settings_Logo}
                  width={18}
                  alt="go-back-logo"
                />
              </div>
            </div>
          </div>

          <div className="relative my-10 mx-auto w-[287px] h-[470px]">
            <PlayersTable players={players} />
            {players.length === 6 ||
              (players.length === 8 ? (
                <button className="relative bottom-[-105%] left-[34%] px-10 py-1.5 text-[12px] font-extralight rounded-[10px] bg-black border-[1px] border-white/40  text-white/60">
                  SIT
                </button>
              ) : (
                ""
              ))}
            {/* Add more content here, which will be placed over the background */}
          </div>
        </div>

        <div className="relative flex items-center justify-center mt-20 mb-4">
          <div
            onClick={() => setIsChatOpen((prevState) => !prevState)}
            className="p-3.5 rounded-full gray-gradient blue-drop-shadow cursor-pointer"
            style={{
              pointerEvents: isAnyPopupOpen && !isChatOpen ? "none" : "auto",
              zIndex: 10, // Ensure this is above the overlay
            }}
          >
            <Image src={Chat} width={20} alt="chat-logo" />
          </div>

          <div
            onClick={() => setIsEmoji((prevState) => !prevState)}
            className={`${
              isEmoji ? "border-yellow-400" : "border-transparent"
            }  border-[1px] p-3.5 ml-3 rounded-full gray-gradient blue-drop-shadow cursor-pointer`}
            style={{
              pointerEvents: isAnyPopupOpen && !isEmoji ? "none" : "auto",
              zIndex: 10, // Ensure this is above the overlay
            }}
          >
            <Image
              src={isEmoji ? Emoji_Selected : Emoji}
              width={20}
              alt="emoji-logo"
            />
          </div>
        </div>
      </section>
      <BuyInPopup
        isVisible={isBuyInPopup}
        handleClose={handleBuyInPopupClose}
      />
      <RecentPopup isVisible={isRecentOpen} handleClose={handleRecentClose} />
      <BuyChips isVisible={isBuyChipsOpen} handleClose={handleBuyChipsClose} />
      <Chats isVisible={isChatOpen} handleClose={handleChatClose} />
      <Settings isVisible={isSettingsOpen} />
      <EmojisPopup isVisible={isEmoji} handleClose={handleEmojiClose} />
      <FoldCall isVisible={isFoldCall} handleClose={handleFoldCallClose} />
      <BackRaise isVisible={isBackRaise} handleClose={handleBackRaiseClose} />
    </>
  );
}
