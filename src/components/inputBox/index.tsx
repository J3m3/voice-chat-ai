import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function InputBox() {
  return (
    <div className="input-box-container">
      <input type="text" className="input-box" placeholder="text here..." />
      <PaperAirplaneIcon className="input-box-icon" />
    </div>
  );
}

export default InputBox;
