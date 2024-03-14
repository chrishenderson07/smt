import GameTeaserCard from "@/components/card/GameTeaserCard";
import ArenaCard from "@/components/card/ArenaCard";
import TeacherCard from "@/components/card/TeacherCard";
import TournamentCard from "@/components/card/TournamentCard";
import { getVideos } from "./entities/videos";
import { getArenas,getVideosByArena } from "./entities/arena";
import { getTeachers } from "./entities/teacher";


export const CardFetchConfigTypes = {
  GetGameTeaserVideo:'GetGameTeaserVideo',
  GetArenas:'GetArenas',
  GetTournaments:"GetTournaments",
  GetVideosByArena:'GetVideosByArena',
  GetTeachers:'GetTeachers',
}

export const CardFetchConfig = [
    {
      type: CardFetchConfigTypes.GetGameTeaserVideo,
      Component: GameTeaserCard,
      prismaFunction: getVideos
    },
    {
      type: CardFetchConfigTypes.GetArenas,
      Component: ArenaCard,
      prismaFunction: getArenas
    },{

      type: CardFetchConfigTypes.GetTournaments,
      Component: TournamentCard,
      prismaFunction: getArenas
    },
    {
        type: CardFetchConfigTypes.GetVideosByArena,
        Component:GameTeaserCard,
        prismaFunction:getVideosByArena
    },
    {
      type: CardFetchConfigTypes.GetTeachers,
      Component:TeacherCard,
      prismaFunction:getTeachers
  },  
    
];

export async function getCardFetchedConfig(cardType: string,
   existingData?:any[],
   fetchDataProp?:any)
  {
    let fetchedCards;
    let Component;
  
  
    const fetchType = CardFetchConfig?.find(data => data.type === cardType);
    Component = fetchType?.Component;
    fetchedCards = existingData ? existingData 
    : await fetchType?.prismaFunction(fetchDataProp)
  
    return { datas: fetchedCards, Component: Component};
  }
  