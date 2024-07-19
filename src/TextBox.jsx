// src/TextBox.js
import React from 'react';

const TextBox = ({ text }) => {
  return (
    <div className="text-box">
      <textarea value={text} readOnly className="text-area" />
    </div>
  );
};

export default TextBox;
