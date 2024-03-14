import GameTeaserRowCard from '@/components/card/GameTeaserRowCard';
import React from 'react';
import { getSimilarVideos } from '@/app/api/services/entities/videos';
import Channel from "../channel/Index";

export default async function Index({id}:{id:string}) {
  const videos = await getSimilarVideos(id);
  

  return (
    <div className="w-full h-full flex flex-col space-y-6">
    <Channel/>
    <div className="relative grow overflow-hidden overflow-y-scroll max-h-[66vh] laptop:max-h-none">
      <div className="space-y-4 laptop:absolute">
        {
          videos.map(video => <GameTeaserRowCard key={video.id} data={video}/>)
        }
      </div>
    </div>
  </div>
  )
}
