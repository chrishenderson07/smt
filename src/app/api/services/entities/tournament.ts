import { Tournament } from "@prisma/client";
import prisma from "../../../../../prisma/client";
import { Prisma } from "@prisma/client";


export interface ITournament{
    data: Tournament
}

export const tournamentIncludes = {
    arenas:{arenas:true},
    videos:{videos:true}
}


export async function getTournamets(options?: Prisma.TournamentFindManyArgs) {
    return await prisma.tournament.findMany(options)
  }

export async function getTournamentById(arenaId: string, includes: {}) {

    const tournament = await prisma.tournament.findUnique({
      where: { id: arenaId },
      include: includes
    });

    return tournament;
}



interface TournamentWithDate {
  date: Date;
  tournaments: Tournament[];
}

export async function getTournamentsOrganizedByDate(options?: Prisma.TournamentFindManyArgs) {
  const tournaments = await prisma.tournament.findMany({
    ...options, 
  });

   
  const organizedTournaments: TournamentWithDate[] = [];

  tournaments.forEach(tournament => {
    const tournamentDate = new Date(tournament?.date);
    const existingGroup = organizedTournaments.find(group => isSameDay(group.date, tournamentDate));

    if (existingGroup) {
      existingGroup.tournaments.push(tournament);
    } else {
      organizedTournaments.push({
        date: tournamentDate,
        tournaments: [tournament]
      });
    }
  });

  return organizedTournaments ;
}

function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }
 