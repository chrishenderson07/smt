import React from "react";
import DetailsList from "../list/DetailsList";
import Link from "next/link";
import { Video } from "@prisma/client";

interface Props {
  data: Video;
  fixedMeasure?:boolean
}


export default function GameTeaserCard({data, fixedMeasure=true}:Props) {
  return (
    <Link href={`/video/${data.id}`}>
      <div
      className={`space-y-4 ${fixedMeasure?
      "w-[80vw] tablet:w-[60vw] md:w-[42vw] laptop:w-teaser_card_lg desktop:w-teaser_card_xl"
      :
      ""
      }
      `}
    >
      <div className="w-full bg-skeleton-dark rounded-lg relative pb-[55.9440559441%]">
        <div className="absolute"></div>
      </div>
      <div className="space-y-4">
        <h1 className="font-semibold text-md">{data.title}</h1>
        {data.highlights.length > 0 && (<DetailsList data={data.highlights} isDotted={true}/>)}
      </div>
    </div>
    </Link>
  );
}

