import React from 'react';
import { Teacher } from '@prisma/client';
import Link from 'next/link';
import { TypographyH4 } from '../typography/H4';
import DetailsList from '../list/DetailsList';
import Paragraph from '../typography/Paragraph';
import { TypographyH5 } from '../typography/H5';

interface Props {
  data: Teacher;
  fixedMeasure?:boolean
}


export default function TeacherCard({data, fixedMeasure=true}:Props){
  return (
    <div className={`${fixedMeasure && "max-w-[36vw]"}`}>
      <Link href={`/teacher/${data.id}`}>
      <div className='px-4 py-8 border rounded'>
      <div className='flex-items-center space-x-3'>
        <div className='w-24 h-24 bg-skeleton-dark rounded-sm'>
   
        </div>
       <div className='space-y-1'>
         <h1 className='font-bold text-lg'>{data.name}</h1>
         <TypographyH5 className='text-typo-gray'>Professor de Vôlei</TypographyH5>
       </div>
      </div>
      <DetailsList className='mt-6 text-sm text-typo-tertiary'  data={["Vôlei", "Tênis", "Basquete"]} isDotted={true} />
      <Paragraph className='mt-4 text-typo-gray text-md'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias at nostrum molestiae!
      </Paragraph>
    </div>
      </Link>
    </div>
  );
}


