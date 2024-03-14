import React from 'react'

export default function HeroContainer({children}:{children:React.ReactNode}) {
  return (
    <div className='relative py-[17vw] overflow-hidden'>{children}</div>
  )
}
