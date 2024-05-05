import Image from "next/image";
import InputBlock from "./inputblock/inputblock";
import Card from "@/app/assets/ui/card";

const userCardStyle = { bgColor: "#838b99", txColor: "#ffffff", };
const botCardStyle = { bgColor: "#1f315c", txColor: "#ffffff", };


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Top image */}
      <div className="flex w-full" style={{ backgroundColor: "#0c182e" }}>
        <Image
          src="/imgs/hero.png"
          alt="PollyGlot Logo"
          width={780}
          height={426}
          className=""
        />
      </div>

      <div className="flex flex-col items-center text-black bg-white rounded-lg p-2 w-11/12 h-60">
        {/* <Card msg="How are you?" bgColor="#838b99" txColor="#ffffff" /> */}
        <Card msg="How are you?" {...userCardStyle} />
        <Card msg="Como está você?" {...botCardStyle} />
      </div>

      {/* Input area */}
      <InputBlock />
    </main>
  );
}
