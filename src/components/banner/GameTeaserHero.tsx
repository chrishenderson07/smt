import { Video } from '@prisma/client'
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import pageIcons from '@/utils/pageIcons';

export default function GameTeaserHero({data}:{data:Video}) {
  return (
    <div className='py-[26vw] max-h-[90vh] flex items-center'>
       <div className='wide-wrapping w-full'>
          <div className='text-4xl font-extrabold uppercase text-skeleton-dark laptop:text-7xl'>
           <span>JORDÂNIA</span>
           <div className='space-x-4'>
           <span className='drop-shadow-[0_1.2px_1.2px_rgba(242, 242, 242, 0.8)]'>VS</span>
           <span>Coreia do Sul</span>
           </div>
          </div>

          <div className='space-x-4 mt-8'>
            <Button  variant={"gradient"} size={"hero"} asChild>
              <Link href={`video/${data.id}`} className='space-x-2'>
                <pageIcons.PlayerFill/>
                <span>Assista Agora</span>
              </Link>
            </Button>
            <Button  variant={"border"} size={"hero"} asChild>
              <Link href={"/"} className='space-x-2'>
                <pageIcons.Calendar/>
                <span>Calendário</span>
              </Link>
            </Button>
          </div>
        </div>

       </div>
  
  )
}
