import React from 'react';


export function TypographyH5({children, className}:{children:React.ReactNode, className?:string}) {
    return (
      <h5 className={` ${className} text-sm text-typo-gray`}>
        {children}
      </h5>
    )
  }
  