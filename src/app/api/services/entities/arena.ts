import prisma from "../../../../../prisma/client";
import { Arena, Prisma } from "@prisma/client";

export interface IArena{
  data: Arena
}

export const arenaIncludes = {
  tournaments:{tournaments:true},
  videos:{videos:true}
}

export async function getArenaById(arenaId: string, includes: {}) {

    const arena = await prisma.arena.findUnique({
      where: { id: arenaId },
      include: includes
    });

    return arena;
}


export async function getArenas(options?: Prisma.ArenaFindManyArgs) {
  return await prisma.arena.findMany(options)
}

export async function getVideosByArena(arenaId:string) {
    const arena = await prisma.arena.findUnique({
      where: {
        id: arenaId,
      },
      include: {
        videos: true,
      },
    });
    
    return arena?.videos;
}
  



  

  