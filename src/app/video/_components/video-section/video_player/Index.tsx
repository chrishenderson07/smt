"use client";
import React,{useState, useRef} from "react";
import Player from './components/Player';
import pageIcons from "@/utils/pageIcons";
import socialMedias from "@/data/social-media-links";
import Link from "next/link";
import PlayerBar from "./components/PlayerBar";
import ReactPlayer from 'react-player';
import { setTimeout } from "timers";

export default function Index({youtubId}:{youtubId:string}) {
  const [playing, setPlaying] = useState(true);

  


  return (
    <div className="text-typo-gray"> 
 
      <div className="relative"

      >
      <Player
      youtubId={youtubId}


    />

       
      </div>
     
      <div className="flex-items-center space-x-4  p-4 text-sm laptop:text-xl  bg-skeleton-dark rounded-b-xl">
       <div className="flex-items-center">
        {
          socialMedias.map(data =><Link href={data.link} className="hover:text-detail-primary"><data.Icon/></Link>)
        }
       </div>
     
      </div>
     
    </div>
  )
}
