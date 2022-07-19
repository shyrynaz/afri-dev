import { FC } from 'react';
import './App.css';
import Main from './containers/Main';
import Nav from './containers/Nav';
import LeftMenu from './containers/LeftMenu';
import RightMenu from './containers/RightMenu';

const App: FC = () => {
  return (
    <div className='grid grid-rows-layout lg:grid-areas-layout lg:grid-cols-layout md:grid-cols-small md:grid-areas-small '>
      <Nav />
      <Main />
      <LeftMenu />
      <RightMenu />
    </div>
  );
};

export default App;
