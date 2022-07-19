import React, { FC } from 'react';

const Main: FC = () => {
  const test = false;
  if (test) throw new Error('Main fail');
  return (
    <div className='container mx-auto bg-slate-400 [grid-area:content]'>
      Main
    </div>
  );
};

export default Main;
