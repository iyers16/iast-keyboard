// src/HelpModal.js
import React from 'react';
import './HelpModal.css';

const HelpModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const keyBindings = [
    { combo: 'a-', output: 'ā' },
    { combo: 'i-', output: 'ī' },
    { combo: 'u-', output: 'ū' },
    { combo: 'r-', output: 'ṛ' },
    { combo: 'e-', output: 'ē' },
    { combo: 'o-', output: 'ō' },
    { combo: 'm.', output: 'ṁ' },
    { combo: 'h-', output: 'ḥ' },
    { combo: 'n.', output: 'ṅ' },
    { combo: 'n~', output: 'ñ' },
    { combo: 't-', output: 'ṭ' },
    { combo: 'd-', output: 'ḍ' },
    { combo: 'n-', output: 'ṇ' },
    { combo: 's\'', output: 'ś' },
    { combo: 's.', output: 'ṣ' },
    { combo: 'r.', output: 'ṟ' },
    { combo: 'l.', output: 'ḷ' },
  ];

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Key Bindings</h2>
        <table>
          <thead>
            <tr>
              <th>Combination</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {keyBindings.map((binding, index) => (
              <tr key={index}>
                <td>{binding.combo}</td>
                <td>{binding.output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HelpModal;
