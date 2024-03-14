import React from 'react';
import menuItems from '@/utils/navigation';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className=''>
      {
        menuItems.map(item => <Link href={item.path}>{item.label}</Link>) 
      }
    </div>
  )
}

