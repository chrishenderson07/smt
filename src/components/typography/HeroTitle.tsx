import React from 'react'

export default function HeroTitle({children}:{children:React.ReactNode}) {
  return (
    <h1 className='max-w-hero_title text-3xl font-extrabold leading-[140%] 
    capitalize laptop:text-4xl'>
        {children}
    </h1>
  )
}
