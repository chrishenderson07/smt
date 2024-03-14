import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import pageIcons from '@/utils/pageIcons';
import { Button } from '@/components/ui/button';
import { TypographyH5 } from '@/components/typography/H5';
import Link from 'next/link';
import youtubImage from "@/assets/image/smash_tv_youtub_logo.jpeg";
import socialMedias from '@/data/social-media-links';

export default function Index() {
  return (
    <div className='glassmorphism flex-items-center space-x-4 py-3 laptop:border-2 laptop:p-3 laptop:rounded-xl'>
      <div className='relative flex w-min'>
      <Avatar>
        <AvatarImage src={youtubImage.src} />
        <AvatarFallback></AvatarFallback>
      </Avatar>
       <div className='w-6 h-6 absolute border  bg-detail-primary
          -right-1 -bottom-2 rounded-full flex-center text-black'
        >
         <pageIcons.Check/>
        </div>
      </div>
      <div>
        <Link href={"/"} className='px-0 py-0  text-md font-semibold flex-items-center'>
          SmashTv Brasil
   
        </Link>
        <TypographyH5 className='font-medium hover:text-detail-primary'>
          <Link href="/">Inscreva-se</Link>
        </TypographyH5>
      </div>

    </div>
  )
}
