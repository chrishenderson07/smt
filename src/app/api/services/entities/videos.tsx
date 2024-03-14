import prisma from "../../../../../prisma/client";
import {Prisma, Video } from "@prisma/client";

export interface Ivideo{
    data: Video
}

export async function getVideoById(id:string) {
    return await prisma.video.findUnique({
        where: {
            id: id
        }
    });
}

export async function getVideos(options?: Prisma.VideoFindManyArgs) {
    return await prisma.video.findMany(options)
}


export async function getSimilarVideos(videoId: string): Promise<Video[]> {
    const video = await getVideoById(videoId);
    const min_returned = 6;
    const max_returned = 12;
    const similarVideosTournament = await getVideos({
      where: {
        tournamentId: video?.tournamentId,
        NOT: {
          id: videoId,
        },
      },
      take: max_returned, 
    });
  
    if (similarVideosTournament.length >= min_returned) {
      return similarVideosTournament;
    }
  
    const similarVideosSport = await getVideos({
      where: {
        sportId: video?.sportId,
        NOT: {
          id: videoId,
        },
      },
      take: max_returned - similarVideosTournament.length, 
    });
  
    const recentVideos = await getVideos({
      take: 6 - similarVideosTournament.length - similarVideosSport.length, // Preenche o restante com os últimos vídeos
    });
  
    return [
      ...similarVideosTournament,
      ...similarVideosSport,
      ...recentVideos,
    ];
  }


  export async function fetchVideos(page: number) {
    const perPage = 4;
    const offset = (page - 1) * perPage;
    try {
      const videos = await prisma.video.findMany({
        take: perPage,
        skip:offset
      });
      return videos;
    } catch (error) {
      console.error("Error fetching videos:", error);
      return null;
    }
  }
  

  export function saveVideoId(id: string) {
   
    const existingIds = JSON.parse(localStorage.getItem('videoIds') || '[]');

    existingIds.push(id);
   
    localStorage.setItem('videoIds', JSON.stringify(existingIds));
  }


export async function getVideosByIds() {

  const ids = JSON.parse(localStorage.getItem('videoIds') || '[]');


  const videos = await prisma.video.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return videos;
}
