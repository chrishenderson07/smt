import React from "react";
import { Button } from "../ui/button";
import pageIcons from "@/utils/pageIcons";
import DetailsList from "../list/DetailsList";
import Link from "next/link";
import { Arena } from "@prisma/client";


interface Props {
  data: Arena;
  fixedMeasure?:boolean
}



export default function ArenaCard({data, fixedMeasure=true}:Props) {
  return (
    <Link href={`arena/${data.id}`}>
      <div
      className={`
       p-6 bg-skeleton-dark 
       flex items-end rounded-lg
       relative pb-[55.9440559441%]
       ${fixedMeasure
        ?" w-[80vw] tablet:w-[60vw] md:w-[42vw] laptop:w-teaser_card_lg desktop:w-teaser_card_xl"
        :
        ""
      }
      `}
    >
      <div className="absolute top-0 bottom-0 left-0 h-full w-full">
        <div className="w-full h-full flex justify-start items-end p-4">
          <div className="w-full space-y-3 ">
           
            <h1 className="text-md font-semibold">{data.title}</h1>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}