import React from "react";
import Link from "next/link";
import { Tournament } from "@prisma/client";

interface Props {
  data: Tournament;
  fixedMeasure:boolean
}


export default function TournamentCard({data, fixedMeasure=true}:Props) {
  return (
       
      <div>
         <Link href={`torneio/${data.id}`}>  
            
          
         <div 
        className={`
         bg-skeleton-dark rounded-xl h-60 laptop:h-96 
         ${fixedMeasure
          && " w-44 laptop:w-72 "
          }
        `}
       >
       
        
        </div>
        </Link>
      </div>
      
  );
}


