import React, { FC } from 'react';
import SideBarMenus from '../components/SideBarMenus';
import { useWindowDimensions } from '../hooks/useWidnowDimensions';

const SideBar: FC = () => {
  const { width } = useWindowDimensions();
  if (width <= 786) return null;
  return (
    <div className='[grid:area:sidebard]'>
      <SideBarMenus />
    </div>
  );
};

export default SideBar;
