import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

type MenuItemProps = {
  icon: ReactNode;
  label: string;
};
const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <div className='flex hover:bg-orange-50 rounded-lg mb-4 text-gray-500 items-start p-1 '>
      <div className='rounded p-3 bg-orange-100'>{icon}</div>
      <div className='ml-3'>
        <p className='font-semibold text-md'>{label}</p>
        <p className='font-normal text-xs'>{label}</p>
        <div className='flex mt-3'>
          {['Remote', 'Contract', 'Worldwide', 'Kenya'].map(tag => (
            <Tag title={`${tag}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
const RightMenu: FC = () => {
  return (
    <div className='[grid-area:rightmenu] mx-4 overflow-scroll pb-4'>
      <Card title='Meetups'>
        {[1, 2, 3].map(item => (
          <MenuItem
            key={item}
            label='Afri.dev Crunch base company prifle and goodies'
            icon={<FontAwesomeIcon size='lg' icon={faList} />}
          />
        ))}
      </Card>
      <Card title='Podcasts'>
        {[1, 2, 3, 4, 5].map(item => (
          <MenuItem
            key={item}
            label='Afri.dev Crunch base company prifle'
            icon={<FontAwesomeIcon size='lg' icon={faList} />}
          />
        ))}
      </Card>
    </div>
  );
};

export default RightMenu;
