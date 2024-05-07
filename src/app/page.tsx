'use client';

import Image from "next/image";
import InputBlock from "@/app/components/inputblock";
import Card from "@/app/assets/ui/card";
import { useState } from "react";
import { MsgTranslation } from "@/app/lib/definitions";

export default function Home() {
  const emptyMsg: MsgTranslation[] = [];
  const [msgList, setMsgList] = useState(emptyMsg);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Top image */}
      <div className="flex w-full mb-1 justify-center" style={{ backgroundColor: "#0c182e" }}>
        <Image src="/imgs/hero.png" alt="PollyGlot Logo" width={400} height={0} priority={true} />
      </div>
      {/* Message area */}
      <div className="flex flex-col items-center text-black rounded-lg p-2 h-2/4 w-full">
        {msgList.length !== 0 ? msgList.map((msg, index) => (
          <>
            <Card key={index} msg={msg.msg} cardStyle="userCard" />
            <Card key={index} msg={msg.translation} cardStyle="aiCard" />
          </>
        )) : <Card msg="No messages yet" cardStyle="userCard" />
        }
      </div>
      {/* Input area */}
      <div className="h-1/4">
        <InputBlock msgList={msgList} setMsgList={setMsgList} />
      </div>
    </main>
  );
}
