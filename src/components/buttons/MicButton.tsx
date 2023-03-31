import React from 'react';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

function micButton() {
  return (
    <button className="mic-button">
      <MicrophoneIcon className="mic-button-icon" />
    </button>
  );
}

export default micButton;
