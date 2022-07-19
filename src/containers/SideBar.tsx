import React, { FC } from 'react';
import { useWindowDimensions } from '../hooks/useWidnowDimensions';

const SideBar: FC = () => {
  const { width } = useWindowDimensions();
  if (width <= 786) return null;
  return <div>SideBar</div>;
};

export default SideBar;
