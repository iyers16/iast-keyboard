// src/Keyboard.js
import React from 'react';

const iastMapping = [
  { char: 'a', code: '0061' },
  { char: 'ā', code: '0101' },
  { char: 'i', code: '0069' },
  { char: 'ī', code: '012B' },
  { char: 'u', code: '0075' },
  { char: 'ū', code: '016B' },
  { char: 'ṛ', code: '1E5B' },
  { char: 'e', code: '0065' },
  { char: 'ē', code: '0113' },
  { char: 'o', code: '006F' },
  { char: 'ō', code: '014D' },
  { char: 'ṁ', code: '1E41' },
  { char: 'ḥ', code: '1E25' },
  { char: 'k', code: '006B' },
  { char: 'g', code: '0067' },
  { char: 'ṅ', code: '1E45' },
  { char: 'c', code: '0063' },
  { char: 'j', code: '006A' },
  { char: 'ñ', code: '00F1' },
  { char: 'ṭ', code: '1E6D' },
  { char: 'ḍ', code: '1E0D' },
  { char: 'ṇ', code: '1E47' },
  { char: 't', code: '0074' },
  { char: 'd', code: '0064' },
  { char: 'n', code: '006E' },
  { char: 'p', code: '0070' },
  { char: 'b', code: '0062' },
  { char: 'm', code: '006D' },
  { char: 'y', code: '0079' },
  { char: 'r', code: '0072' },
  { char: 'l', code: '006C' },
  { char: 'v', code: '0076' },
  { char: 'ś', code: '015B' },
  { char: 'ṣ', code: '1E63' },
  { char: 's', code: '0073' },
  { char: 'h', code: '0068' },
  { char: 'ṟ', code: '1E5F' },
  { char: 'ḷ', code: '1E37' },
  { char: 'z', code: 'z' }, // For Tamizh
];

const Keyboard = ({ onKeyPress }) => {
    return (
      <div className="keyboard">
        {iastMapping.map((key) => (
          <button
            key={key.code}
            onClick={() => onKeyPress(key.char)}
            className="key-button"
          >
            {key.char}
          </button>
        ))}
        <button onClick={() => onKeyPress(' ')} className="key-button">Space</button>
        <button onClick={() => onKeyPress('backspace')} className="key-button">Backspace</button>
      </div>
    );
  };
  

export default Keyboard;
