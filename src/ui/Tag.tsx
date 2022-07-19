import React, { FC } from 'react';
type TagProps = {
  title: string;
};
export const Tag: FC<TagProps> = ({ title }) => {
  return (
    <p className='bg-gray-50 px-2 py-1 text-xs text-gray-400 font-semibold rounded-lg mr-2'>
      {title}
    </p>
  );
};
