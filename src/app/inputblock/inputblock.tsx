import React from 'react';
import Image from 'next/image';


export default function InputBlock() {
  return (
    <form>
      <div className="flex flex-col items-center input-area bg-green-500">
        Input Area
      </div>
      <div className="flex items-center input-area" style={{ width: '300px' }} >
        <div className="flag-container mx-1"><Image alt="Flag of Brasil" src="/imgs/brasil-flag.png" width={100} height={67} /></div>
        <div className="flag-container mx-1"><Image alt="Flag of France" src="/imgs/france-flag.png" width={100} height={67} /></div>
        <div className="flag-container mx-1"><Image alt="Flag of Japan" src="/imgs/japan-flag.png" width={100} height={67} /></div>
        <div className="flag-container mx-1"><Image alt="Flag of Spain" src="/imgs/spain-flag.png" width={100} height={67} /></div>
      </div>

    </form>
  );
}
