import React from 'react';
import Slide from './Slide';

export default function HeroSlide({children}:{children:React.ReactNode}) {
  return (
    <Slide
    configs={{
        slidesPerView: 1,
        pagination:{ clickable: true },
       }}
    >
        {children}
    </Slide>
  )
}
