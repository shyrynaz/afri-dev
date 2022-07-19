import { FC } from 'react';
import './App.css';
import Main from './containers/Main';
import Nav from './containers/Nav';
import LeftMenu from './containers/LeftMenu';
import RightMenu from './containers/RightMenu';

const App: FC = () => {
  return (
    <div className='grid grid-cols-1'>
      <Nav />
      <Main />
      <LeftMenu />
      <RightMenu />
    </div>
  );
};

export default App;
