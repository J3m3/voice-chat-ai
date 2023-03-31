import React from 'react';
import MicButton from '@/components/buttons/MicButton';
import SoundWave from '@/components/stroke';

function rightSideMenu() {
  return (
    <div className="right-side-container">
      <SoundWave />
      <div className="v-line" />
      <MicButton />
    </div>
  );
}

export default rightSideMenu;
