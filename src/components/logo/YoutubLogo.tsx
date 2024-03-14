import React from 'react';
import pageIcons from '@/utils/pageIcons';

export default function () {
  return (
    <div className='flex-items-center'>
        <div className='w-14 h-14 bg-skeleton-dark rounded-full'></div>
        <div>
          <h1 className='flex space-x-1 relative font-bold '>
            <span>SmashTv</span>
            <div className='flex-items-center justify-center w-6 h-6 bg-skeleton-dark rounded-full'>
              <pageIcons.Check/>
            </div>
          </h1>
          <span className='text-xs'>Inscreva-se</span>
        </div>
     </div>     
  )
}
