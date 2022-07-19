import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Avatar } from '../ui/Avatar';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

const PostStatItem: FC<{ stat: string }> = ({ stat }) => {
  return (
    <p className='font-normal mr-4 hover:text-orange-400 text-gray-400 text-xs'>
      {stat}
    </p>
  );
};

const Main: FC = () => {
  const test = false;
  if (test) throw new Error('Main fail');
  return (
    <div className='container overflow-scroll pb-4 px-4 mx-auto [grid-area:content]'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(post => (
        <Card key={post}>
          <div className='flex cursor-pointer items-center'>
            <div className='h-40 w-56 mr-4 rounded-md overflow-hidden'>
              <img
                className='object-fill h-40 w-56'
                alt='post-alt'
                src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              />
            </div>

            <div>
              <div className='flex items-baseline text-gray-400'>
                <h4 className='text-gray-600 font-medium'>
                  Bitcoin has tumbled from its record high of $58,000 after
                  words from three wise men and women
                </h4>
                <FontAwesomeIcon size='sm' icon={faHeart} color='orange' />
              </div>
              <div className='flex mt-3'>
                {[1, 2, 3, 4].map(tag => (
                  <Tag title={`user-${tag}`} />
                ))}
              </div>
              <div className='mt-6 mr-5 grid grid-cols-2 items-center'>
                <Avatar
                  url='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                  name='Shiri Naz'
                  description='3 weeks ago'
                />
                <div className='flex'>
                  {['Views', 'Likes', 'comments'].map(stat => (
                    <PostStatItem stat={`6,200 ${stat}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Main;
