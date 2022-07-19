import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import Logo from '../assets/svg/Logo';
import { useWindowDimensions } from '../hooks/useWidnowDimensions';

const Nav: FC = () => {
  const { width } = useWindowDimensions();
  const getMobileMenu = () => {
    if (width <= 768) {
      return <FontAwesomeIcon size='lg' icon={faBars} />;
    } else {
      return (
        <div className='p-2 bg-orange-100 '>
          <Logo height={30} width={30} />
        </div>
      );
    }
  };
  return (
    <div className='bg-white z-50 flex px-4 shadow-md items-center [grid-area:nav]'>
      {getMobileMenu()}
      <strong className='ml-2'>Afri.dev</strong>
    </div>
  );
};

export default Nav;
