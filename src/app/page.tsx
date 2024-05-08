'use client';

import InputBlock from "@/app/components/inputblock";
import Card from "@/app/assets/ui/card";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { MsgTranslation } from "@/app/lib/definitions";



export default function Home() {
  const emptyMsg: MsgTranslation[] = [];
  const [msgList, setMsgList] = useState(emptyMsg);
  const scrollableRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [msgList]);

  const scrollToBottom = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  };


  return (
    <main className="flex flex-col h-screen">
      {/* Top image */}
      <div className="flex mb-1 w-full justify-center h-1/4" style={{ backgroundColor: "#0c182e" }}>
        <img src="/imgs/hero.png" alt="PollyGlot Logo" className="" />
        {/* width="400px" */}
      </div>

      {/* Message area */}
      <div className="med flex w-full h-full flex-col items-center text-black rounded-lg p-1 flex-2 overflow-y-auto scroll-snap-type-y mandatory">
        <div ref={scrollableRef} className="scrollable w-full h-full overflow-y-auto">
          {msgList.length !== 0 ? msgList.map((msg, index) => (
            <React.Fragment key={index}>
              <Card msg={msg.msg} cardStyle="userCard" />
              <Card msg={msg.translation} cardStyle="aiCard" />
            </React.Fragment>
          )) : <Card msg="No messages yet" cardStyle="userCard" />
          }
        </div>
      </div>

      {/* Input area */}
      <div className="flex-1 bottom-0 relative">
        <InputBlock msgList={msgList} setMsgList={setMsgList} />
      </div>
    </main>
  );
}
