import React, { FC } from 'react';

type AvatarProps = {
  name: string;
  description?: string;
  url: string;
};

export const Avatar: FC<AvatarProps> = ({ name, description, url }) => {
  return (
    <div className='flex items-center'>
      <img
        className='p-1 w-14 h-14 rounded-full'
        src={url}
        alt='Bordered avatar'
      />
      <div className='ml-2'>
        <p className='font-medium text-gray-400 text-xs '>{name}</p>
        <p className='font-normal text-gray-400 text-xs '>{description}</p>
      </div>
    </div>
  );
};
