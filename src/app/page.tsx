'use client';

import Card from "@/app/assets/ui/card";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { MsgTranslation } from "@/app/lib/definitions";
import InputBlock from "@/app/components/inputblock";

export default function Home() {
  const emptyMsg: MsgTranslation[] = [];
  const [msgList, setMsgList] = useState(emptyMsg);
  const [showQR, setShowQR] = useState(0);
  const scrollableRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollableRef.current) {
      const htmlDiv: HTMLDivElement = scrollableRef.current;
      htmlDiv.scrollTop = htmlDiv.scrollHeight;
      setShowQR(showQR + 1);
    }
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line
  }, [msgList]);

  return (
    <main className="flex flex-col h-screen">
      {/* Top image */}
      <div className="flex mb-1 w-full justify-center h-1/4" style={{ backgroundColor: "#0c182e" }}>
        <div className="flex w-4/12">
          <div className="flex justify-center">
            {/* eslint-disable-next-line */}
            <img src="/imgs/couple.png" alt="Communicator Logo" className="" />
          </div>
        </div>
        <div className="flex flex-col w-8/12 justify-center items-center">
          <div className="flex w-10/12">
            {/* eslint-disable-next-line */}
            <img src="/imgs/communicator.png" alt="Communicator" />
          </div>
          <p className="app-subtitle">AI-Powered Translator</p>
        </div>
      </div>

      {/* Message area */}
      <div className={`med flex w-full h-full flex-col items-center text-black
      rounded-lg flex-2 overflow-y-auto ${showQR > 1 ? "" : "qrBg"}`} >
        <div ref={scrollableRef} className="scrollable w-full h-full overflow-y-auto">
          {msgList.length !== 0 ? msgList.map((msg, index) => (
            <React.Fragment key={index}>
              {msg.msg ? <Card msg={msg.msg} cardStyle="userCard" /> : null}
              <Card msg={msg.translation} cardStyle="aiCard" />
            </React.Fragment>
          )) : <Card msg="No messages yet" cardStyle="userCard" />
          }
        </div>
      </div>

      {/* Input area */}
      <div className="flex-1 bottom-0 relative">
        <InputBlock msgList={msgList} setMsgList={setMsgList} />
        <div className="flex justify-between">
          <span className="text-gray-400 text-xs ml-2">Ver. 1.0</span>
          <span className="text-gray-400 text-xs mr-2">Design 2024, by Márcio Reis Jr.</span>
        </div>
      </div>
    </main>
  );
}
