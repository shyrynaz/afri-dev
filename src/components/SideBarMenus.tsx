import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addUser, selectUser } from '../features/users/userSlice';
import { Card } from '../ui/Card';

type MenuItemProps = {
  icon: ReactNode;
  label: string;
};

const SideBarMenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <div className='flex hover:bg-orange-50 rounded-lg text-gray-500 hover:text-orange-500 items-center py-4 px-2'>
      {icon}
      <span className='ml-2'>{label}</span>
    </div>
  );
};

const SideBarMenus = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  console.log(user, 'user');

  useEffect(() => {
    dispatch(addUser({ id: '1fcsagy62bjw', userName: 'Shiri naz' }));
  }, [dispatch]);

  return (
    <div className='list-none mt-4 mx-10'>
      <Card title='Profile details'>
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
      </Card>
      <Card title='Popular Categories'>
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
      </Card>
      <Card title='Popular Tags'>
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
        <SideBarMenuItem
          label={user.userName}
          icon={<FontAwesomeIcon icon={faUser} />}
        />
      </Card>
    </div>
  );
};

export default SideBarMenus;
