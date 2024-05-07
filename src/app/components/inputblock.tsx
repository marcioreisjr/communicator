'use client';
import React from 'react';
import LangSel from '../assets/ui/langsel';


export default function InputBlock() {
  const langItems = [{ language: 'brasil', src: '/imgs/brasil-flag.png', alt: 'Flag of Brasil' }, { language: 'france', src: '/imgs/france-flag.png', alt: 'Flag of France' }, { language: 'japan', src: '/imgs/japan-flag.png', alt: 'Flag of Japan' }, { language: 'spain', src: '/imgs/spain-flag.png', alt: 'Flag of Spain' }];
  const attrs = { width: 100, height: 67 };

  return (
    <div className='flex flex-col items-center text-black rounded-lg p-2 w-full my-1'>
      <form className='flex flex-col '>
        {/* Text input to translate */}
        <div className="flex flex-row items-center input-area mb-2 w-full border-5 rounded border-gray-500">
          <input type="text" id="msg-input" placeholder=" Your text here..." className='w-full mr-2' />
          <button className="add-ticker-btn">
            <img src="imgs/arrow-btn.png" className="add-ticker-svg h-7" alt="add" />
          </button>
        </div>
        {/* Language selection */}
        <div className="flex items-center input-area" style={{ width: '300px' }} >
          <LangSel langItems={langItems} attrs={attrs} />
        </div>
      </form>
    </div>
  );
}
