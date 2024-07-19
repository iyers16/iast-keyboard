// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import Keyboard from './Keyboard';
import TextBox from './TextBox';
import HelpModal from './HelpModal';
import './App.css';

const keyMapping = {
  'a-': 'ā',
  'i-': 'ī',
  'u-': 'ū',
  'r-': 'ṛ',
  'e-': 'ē',
  'o-': 'ō',
  'm.': 'ṁ',
  'h-': 'ḥ',
  'n.': 'ṅ',
  'n~': 'ñ',
  't-': 'ṭ',
  'd-': 'ḍ',
  'n-': 'ṇ',
  's\'': 'ś',
  's.': 'ṣ',
  'r.': 'ṟ',
  'l.': 'ḷ',
};

const singleKeyMapping = {
  a: 'a',
  i: 'i',
  u: 'u',
  e: 'e',
  o: 'o',
  k: 'k',
  g: 'g',
  c: 'c',
  j: 'j',
  t: 't',
  d: 'd',
  n: 'n',
  p: 'p',
  b: 'b',
  m: 'm',
  y: 'y',
  r: 'r',
  l: 'l',
  v: 'v',
  s: 's',
  h: 'h',
  z: 'z',
};

function App() {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const convertText = useCallback((inputText) => {
    let result = '';

    for (let i = 0; i < inputText.length; i++) {
      let buffer = inputText.slice(i);
      let converted = false;

      // Check for composite characters
      for (let key in keyMapping) {
        if (buffer.startsWith(key)) {
          result += keyMapping[key];
          i += key.length - 1;
          converted = true;
          break;
        }
      }

      // If no composite character found, add the single character
      if (!converted) {
        result += inputText[i];
      }
    }

    return result;
  }, []);

  const handleKeyPress = (char) => {
    if (char === 'backspace') {
      setText((prevText) => convertText(prevText.slice(0, -1)));
    } else {
      setText((prevText) => convertText(prevText + char));
    }
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Backspace') {
        setText((prevText) => convertText(prevText.slice(0, -1)));
      } else {
        setText((prevText) => convertText(prevText + event.key));
      }
    },
    [convertText]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <h1>IAST Keyboard</h1>
      <button onClick={() => setShowModal(true)}>Show Key Bindings</button>
      <TextBox text={text} />
      <Keyboard onKeyPress={handleKeyPress} />
      <HelpModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
