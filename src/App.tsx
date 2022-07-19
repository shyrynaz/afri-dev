import { FC } from 'react';
import './App.css';
import Main from './containers/Main';
import Nav from './containers/Nav';
import LeftMenu from './containers/LeftMenu';
import RightMenu from './containers/RightMenu';
import SideBar from './containers/SideBar';

const App: FC = () => {
  return (
    <div className='bg-gray-100  h-screen grid grid-rows-layout lg:grid-areas-layout lg:grid-cols-layout md:grid-cols-small md:grid-areas-small '>
      <Nav />
      <SideBar />
      <Main />
      {/* <LeftMenu /> */}
      <RightMenu />
    </div>
  );
};

export default App;
