import HeroSlide from '@/components/carousel/HeroSlide';
import GameTeaserHero from '@/components/banner/GameTeaserHero';
import React from 'react'
import { fetchVideos, getVideos } from '../api/services/entities/videos';
import GridCards from '@/components/layout/GridCards';
import GameTeaserCard from '@/components/card/GameTeaserCard';
import { CardFetchConfigTypes } from '../api/services/service-config';

export default async function page() {
  const videos = await getVideos();

  if(!videos){
    return
  }

  return (
    <div>
      <HeroSlide>
       <GameTeaserHero data={videos[0]}/>
       <GameTeaserHero data={videos[1]}/>
      </HeroSlide>
      <GridCards 
        variant='gameTeaserCard' 
        existingData={videos} 
        dataType={CardFetchConfigTypes.GetGameTeaserVideo}
        cardProps={{fixedMeasure:false}}
        />
    </div>
  )
}
