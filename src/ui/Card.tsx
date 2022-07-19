import { FC, ReactNode } from 'react';

type CardProps = {
  title?: string;
  children: Array<ReactNode> | ReactNode;
};

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className='shadow-md mt-4 py-3 px-3 rounded-md bg-white '>
      <strong>{title}</strong>
      {children}
    </div>
  );
};
