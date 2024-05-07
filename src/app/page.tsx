import Image from "next/image";
import InputBlock from "@/app/components/inputblock";
import Card from "@/app/assets/ui/card";


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Top image */}
      <div className="flex w-full mb-1 justify-center" style={{ backgroundColor: "#0c182e" }}>
        <Image src="/imgs/hero.png" alt="PollyGlot Logo" width={400} height={0} />
      </div>
      {/* Message area */}
      <div className="flex flex-col items-center text-black rounded-lg p-2 w-full h-60">
        <Card msg="How are you?" cardStyle="userCard" />
        <Card msg="Como está você?" cardStyle="aiCard" />
      </div>
      {/* Input area */}
      <InputBlock />
    </main>
  );
}
