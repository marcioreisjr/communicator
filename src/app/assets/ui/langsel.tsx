import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip'

/**
 * Language selection component
 *
 * @param {Object[]} langItems - List of language items with the format:
 *    { language: string, img: URL }
 * @param {Object} attrs - Attributes for the Image component with the format:
 *   { width: number, height: number }
 */
export default function LangSel(
  { langItems, attrs }: {
    langItems: { language: string, src: string, alt: string }[],
    attrs: { width: number, height: number }
  }) {
  let [langSel, setLangSel] = useState(langItems[0].language);
  return (
    <div className='flex flex-row'>
      {langItems.map((item) => (
        <div key={item.language} className='flex flex-col items-center mx-1'>
          <label htmlFor={`lang-${item.language}`} onClick={() => setLangSel(item.language)} className='mb-1'>
            <Image src={item.src} alt={item.alt} width={attrs.width} height={attrs.height}
              className='rounded-lg' data-tooltip-id="flag-tooltip"
              data-tooltip-content={item.language.charAt(0).toUpperCase() + item.language.slice(1)}
              data-tooltip-place='top'
            />
          </label>
          <input onChange={() => setLangSel(item.language)} type="radio" id={`lang-${item.language}`} name="langSel" value={item.language} checked={langSel === item.language} className='appearance-none rounded-sm w-3/4 border-2 border-solid border-gray-400 checked:border-blue-600' />
        </div>
      ))}
      <Tooltip id="flag-tooltip" style={styles.tool_tip}/>
    </div>
  );
}

// Styles for this component
const styles = {
  tool_tip: {
    backgroundColor: "#1f315c",
    color: 'white',
  }
}
