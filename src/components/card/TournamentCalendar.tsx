import React from 'react';
import { TypographyH2 } from '../typography/H2';
import { Tournament } from '@prisma/client';
import DetailsList from '../list/DetailsList';
import { Badge } from '../ui/badge';
import pageIcons from '@/utils/pageIcons';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function TournamentCalendar({data}:{data:Tournament}) {
  return (
    <div className='border flex-between-center p-4'>
      <div className='w-full flex-between-center space-x-4'>

      <div className='w-32 h-32 bg-skeleton-dark'>
      
      </div>

      <div className='grow'>
        <Link href={`/tournament/${data.id}`}>
          <TypographyH2>{data?.title}</TypographyH2>
        </Link>
        <Button variant={"link"} className='space-x-1 text-xs px-0'>
          <pageIcons.Place className='text-[1.1rem]'/>
          <span>
            {data.location}
          </span>
        </Button>
        <DetailsList className='text-xs mt-4' isDotted={true}  
        data={["Final", <Badge>Vôlei</Badge>]}/>
      </div>

      <div className='border-l px-8 font-bold flex flex-col items-center space-y-2'>
        <div className='flex space-x-3 text-lg'>
          <div className='flex flex-col items-center'>
            <div>1</div>
            <div>Apr</div>
          </div>
          <span>-</span>
          <div className='flex flex-col items-center'>
            <div>1</div>
            <div>Apr</div>
          </div>
        </div>
        <Badge className='font-normal space-x-1 text-sm'>
          <pageIcons.Watch/>
          <span>14:00</span>
        </Badge>
      </div>

      </div>
    </div>
  )
}
