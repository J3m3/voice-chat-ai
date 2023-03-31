import React from 'react';
import InputBox from '@/components/inputBox';
import ChattingForm from '@/components/chat/ChattingForm';

function MainChatting() {
  return (
    <div className="main-chat-container">
      <ChattingForm />
      <InputBox />
    </div>
  );
}

export default MainChatting;
