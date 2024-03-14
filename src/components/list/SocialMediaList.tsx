import React from 'react';
import { socialMediasArray } from '@/data/social-media-links';
import Link from 'next/link';

export default function SocialMediaList({className}: {className?: string}) {
  return (
    <ul className={className}>
       {
          socialMediasArray?.map((media) => {
            return <li key={media?.label}><Link href={media.link}><media.Icon className="hover:text-detail-primary"/></Link></li>;
          })
        }
    </ul>
  )
}
