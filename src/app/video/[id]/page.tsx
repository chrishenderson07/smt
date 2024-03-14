
import React from 'react';   
import prisma from '../../../../prisma/client';
import Player from "../_components/video-section/video_player/Index";
import SideBar from '../_components/sidebar/Index';
import Description from "../_components/video-section/description/Index";
import { getVideoById } from '@/app/api/services/entities/videos';
import VideoSection from "../_components/video-section/Index";

interface Props {
  params: { id: string };
}

export default  function page({ params }: Props) {
  const { id } = params;

  return (
    <>  
        <div className="section">
          <div className="w-full grid grid-cols-1 gap-12 desktop:grid-cols-desk_teaser_cards laptop:laptop_teaser_cards">
            <VideoSection id={id}/>
            <SideBar id={id}/>
         </div>
        </div>     
    </>
  );
}



