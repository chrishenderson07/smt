import React from 'react';
import { Separator } from "@/components/ui/separator";
import pageIcons from '@/utils/pageIcons';

export default function DetailsList({
  className,
  data,
  isDotted
}: {
  className?: string,
  data: Array<React.ReactNode>
  isDotted?: boolean
}) {
  

  if(!data) return

  return (
    <ul className={`flex-items-center space-x-1 ${className}`}>
      {
        data.map((child, index) => (
          <React.Fragment key={index}>
            <li>{child}</li>
            {index !== data.length - 1 && (
              isDotted? <pageIcons.Dot className='text-[1.1rem]'/> : <Separator />
            )}
          </React.Fragment>
        ))
      }
    </ul>
  );
}
