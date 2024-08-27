"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import cross from "../../assets/icons/cross.svg";
import Person from "../../assets/icons/gameplay/person.png";
import Send_Message from "../../assets/icons/gameplay/send.png";

function Chats({ isVisible, handleClose }) {
  const chatsArray = [
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
    { image: Person, name: "Reza", text: "Lorem Ipsum dolor amet" },
  ];

  const [messages, setMessages] = useState(chatsArray);
  const [newMessage, setNewMessage] = useState("");

  const handleAddMessage = () => {
    console.log("newMessage", newMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { image: Person, name: "New User", text: newMessage },
    ]);
    setNewMessage("");
  };

  return (
    <>
      <div
        className={`p-3 absolute w-[91%] max-h-[690px] overflow-auto hide-scrollbar top-[7%] left-[50%] bg-[#040e2b] bg-opacity-70  backdrop-blur-[12px] transform -translate-x-1/2 z-[1000]  ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[700px] opacity-0"
        } transition-transform duration-200 ease-in-out blue-drop-shadow rounded-3xl`}
      >
        <div className="flex justify-between items-center ">
          <h2 className="text-[24px] font-bold">Chat</h2>
          <button onClick={handleClose}>
            <Image
              src={cross}
              width={37}
              className="p-3 gray-gradient rounded-full"
              alt="cross-logo"
            />
          </button>
        </div>

        {/* Chats */}
        <div className="my-3.5">
          {/* Chat  */}

          {messages.map((chat, index) => {
            return (
              <div key={index} className="flex flex-row items-center py-3">
                <Image src={Person} width={40} alt="person-logo" />
                <div className="ml-3">
                  <p className="text-[12px] font-bold">{chat.name}</p>
                  <p className="text-[12px] font-light mt-1.5">{chat.text}</p>
                </div>
              </div>
            );
          })}

          <div className="flex items-center justify-between">
            <input
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              type="text"
              className=" font-light gray-gradient py-2 px-4 w-[78%] outline-none rounded-[64px]"
            />
            <div
              onClick={handleAddMessage}
              className="p-3 rounded-full gray-gradient blue-drop-shadow cursor-pointer"
            >
              <Image src={Send_Message} width={20} alt="send-message-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
