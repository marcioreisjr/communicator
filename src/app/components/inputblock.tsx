import LangSel from '@/app/assets/ui/langsel';
import { useFormState } from 'react-dom';
import { translateSrv } from '@/app/lib/actions';
import React, { useEffect, useRef } from 'react';
import { MsgTranslation } from '@/app/lib/definitions';
import Image from 'next/image';


export default function InputBlock({ msgList, setMsgList }: { msgList: MsgTranslation[], setMsgList: Function }) {
  const langItems = [
    { language: 'portuguese', src: '/imgs/brasil-flag.png', alt: 'Flag of Brazil' },
    { language: 'french', src: '/imgs/france-flag.png', alt: 'Flag of France' },
    { language: 'japanese', src: '/imgs/japan-flag.png', alt: 'Flag of Japan' },
    { language: 'spanish', src: '/imgs/spain-flag.png', alt: 'Flag of Spain' },
    { language: 'english', src: '/imgs/usa-flag.png', alt: 'Flag of USA' },
  ];
  const attrs = { width: 100, height: 67 };
  const [transResult, formAction] = useFormState(translateSrv, null);
  const arrowBtn = useRef(null);
  const loaderBtn = useRef(null);
  const realBtn = useRef(null);

  function setBtnImg(element: React.MutableRefObject<any>, attrs: string) {
    if (!element || !element.current) return;
    const el: HTMLImageElement = element.current;
    el.style.display = attrs;
  }

  function setBtnEnabled(btn: React.MutableRefObject<any>, enabled: boolean) {
    if (!btn || !btn.current) return;
    const el: HTMLButtonElement = btn.current;
    el.disabled = !enabled;
  }

  useEffect(() => {
    if (!transResult) return;
    setMsgList([...msgList, transResult]);
    setBtnEnabled(realBtn, true);
    setBtnImg(loaderBtn, "none");
    setBtnImg(arrowBtn, "block");
    // eslint-disable-next-line
  }, [transResult]);

  return (
    <div className="flex flex-col items-center text-black2 my-1 mb-2 w-full">
      <form action={formAction} onSubmit={() => {
        setBtnEnabled(realBtn, false);
        setBtnImg(loaderBtn, "block");
        setBtnImg(arrowBtn, "none");
      }} className='flex flex-col w-10/12 items-center'>
        {/* Text input to translate */}
        <div className="flex flex-row items-center input-area mb-2 w-full border border-gray-400 text-black rounded-lg p-0.5 bg-white">
          <input type="text" id="msg-input" name="msgInput" placeholder=" Your text here..." className='w-full h-10 mr-2 bg-transparent' />
          <button className="add-ticker-btn" type='submit' ref={realBtn}>
            <Image src="/imgs/arrow-btn.png" ref={arrowBtn} className="mr-2" width={24} height={24} alt="enter" />
            <Image src="/imgs/loader.svg" ref={loaderBtn} className="hidden mr-2" width={24} height={24} alt="loading" />
          </button>
        </div>
        {/* Language selection */}
        <div className="flex items-center input-area"  >
          <LangSel langItems={langItems} attrs={attrs} />
        </div>
      </form>
    </div>
  );
}
