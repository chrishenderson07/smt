import React from 'react';
import Description from "./description/Index";
import VideoPlayer from "./video_player/Index";
import { getVideoById } from '@/app/api/services/entities/videos';



export default async function Index({id}:{id:string}) {
  const data = await getVideoById(id);

  return (
    <div className='space-y-6'>
        <VideoPlayer youtubId={data?.youtubeId} />
        <Description data={data}/>
    </div>
  )
}
