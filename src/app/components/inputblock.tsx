import LangSel from '@/app/assets/ui/langsel';
import { useFormState } from 'react-dom';
import { translateSrv } from '@/app/lib/actions';
import React, { useEffect } from 'react';
import { MsgTranslation } from '@/app/lib/definitions';


export default function InputBlock({msgList, setMsgList}: {msgList: MsgTranslation[], setMsgList: Function}) {
  const langItems = [
    { language: 'portuguese', src: '/imgs/brasil-flag.png', alt: 'Flag of Brazil' },
    { language: 'french', src: '/imgs/france-flag.png', alt: 'Flag of France' },
    { language: 'japanese', src: '/imgs/japan-flag.png', alt: 'Flag of Japan' },
    { language: 'spanish', src: '/imgs/spain-flag.png', alt: 'Flag of Spain' },
    { language: 'english', src: '/imgs/usa-flag.png', alt: 'Flag of USA' },
  ];
  const attrs = { width: 100, height: 67 };
  const [transResult, formAction] = useFormState(translateSrv, null);

  useEffect(() => {
    if (transResult === null) return;
    setMsgList([...msgList, transResult]);
  }, [transResult]);

  return (
    <div className='flex flex-col items-center text-black rounded-lg p-2 w-full my-1'>
      <form action={formAction} className='flex flex-col '>
        {/* Text input to translate */}
        <div className="flex flex-row items-center input-area mb-2 w-full border-5 rounded border-gray-500">
          <input type="text" id="msg-input" name="msgInput" placeholder=" Your text here..." className='w-full mr-2' />
          <button className="add-ticker-btn" type='submit'>
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
