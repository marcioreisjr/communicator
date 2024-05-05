import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/imgs/hero.png"
        alt="PollyGlot Logo"
        width={300}
        height={300}
      />
      {/* Tailwind class for red background  */}
      <div className="flex flex-col items-center message-area bg-red-500">
        Message Area
      </div>
      <div className="flex flex-col items-center input-area bg-green-500">
        Input Area
      </div>
      <div className="flex items-center input-area bg-blue-500" style={{width: '300px'}} >
        <div className="flag-container mx-1"><Image alt="Flag of Brasil" src="/imgs/brasil-flag.png" width={100} height={67}/></div>
        <div className="flag-container mx-1"><Image alt="Flag of France" src="/imgs/france-flag.png" width={100} height={67}/></div>
        <div className="flag-container mx-1"><Image alt="Flag of Japan" src="/imgs/japan-flag.png" width={100} height={67}/></div>
        <div className="flag-container mx-1"><Image alt="Flag of Spain" src="/imgs/spain-flag.png" width={100} height={67}/></div>
      </div>
    </main>
  );
}
