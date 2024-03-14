import React from 'react'

export default function Title({children}:{children:React.ReactNode}) {
  return (
    <h1 className='text-lg font-bold laptop:text-xl'>{children}</h1>
  )
}
