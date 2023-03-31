import LeftSideMenu from '@/components/sideMenus/LeftSideMenu';
import MainChatting from '@/components/chat/MainChatting';
import RightSideMenu from '@/components/sideMenus/RightSideMenu';

const App = () => {
  return (
    <div className="app">
      <LeftSideMenu />
      <MainChatting />
      <RightSideMenu />
    </div>
  );
};

export default App;
