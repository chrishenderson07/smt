import React from 'react';


export function TypographyH4({children, className}:{children:React.ReactNode, className:string}) {
    return (
      <h4 className={`scroll-m-20 text-lg font-semibold tracking-tight ${className}`}>
        {children}
      </h4>
    )
  }
  