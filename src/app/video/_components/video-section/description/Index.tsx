import React from 'react';
import Paragraph from '@/components/typography/Paragraph';
import DetailsList from '@/components/list/DetailsList';
import { Video } from "@prisma/client";
import { Badge } from '@/components/ui/badge';
import Title from '@/components/typography/Title';

interface Props {
  data: Video;
}

export default function Index({data}:Props) {
  return (
    <div className="px-6 py-[3%] border-2 rounded-xl laptop:py-8">
    <Title>{data.title}</Title>
    <DetailsList 
    className='mt-6 text-xs' 
    isDotted={true}
    data={[<Badge key="sport">sport</Badge>, <Badge key="torneio">torneio</Badge>, ...data?.highlights]}/>    
    {
      data?.description && (
        <Paragraph variant='description' className='pt-6'>
         {data.description}
        </Paragraph>
      )
    }
  </div>
  )
}
