import React from 'react';

interface TypographyProps {
  variant?: "description";
  children: string ;
  className?:string
}

export default function Paragraph({ variant, children, className }: TypographyProps) {
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      {variant === "description" ? (
        <p className={`"text-typo-tertiary mt-6" ${className}`}>
          <span className="text-typo-gray">Descrição: </span>
          <span >{capitalizeFirstLetter(children)}</span>
        </p>
      ) : (
        <p className={`text-typo-tertiary ${className}`}>{capitalizeFirstLetter(children)}</p>
      )}
    </>
  );
}





