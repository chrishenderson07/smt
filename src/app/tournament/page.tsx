import { getTournamets } from '@/app/api/services/entities/tournament'
import TournamentCalendar from '@/components/card/TournamentCalendar'
import { Tournament } from '@prisma/client'
import React from 'react'
import { Button } from '@/components/ui/button'
// import FilterSection from '@/app/components/filter/FilterSection'

function groupTournamentsByMonth(
	tournaments: Tournament[],
): { month: string; tournaments: Tournament[] }[] {
	const groupedTournaments: { [key: string]: Tournament[] } = {}

	tournaments.forEach((tournament) => {
		let startMonth = new Date(tournament.startDate).getMonth()
		let endMonth = tournament.endDate
			? new Date(tournament.endDate).getMonth()
			: startMonth

		for (let month = startMonth; month <= endMonth; month++) {
			const monthName = new Date(0, month).toLocaleString('default', {
				month: 'long',
			})

			if (!groupedTournaments[monthName]) {
				groupedTournaments[monthName] = [tournament]
			} else {
				groupedTournaments[monthName].push(tournament)
			}
		}
	})

	return Object.entries(groupedTournaments).map(([month, tournaments]) => ({
		month,
		tournaments,
	}))
}

export default async function page() {
	const tournaments = await getTournamets()
	const tournamentByMonth = groupTournamentsByMonth(tournaments)

	console.log(tournamentByMonth[1])

	return (
		<div>
			<div className=" py-4 mb-8 sticky top-0 bg-skeleton-lessOpacity">
				<div className="wide-wrapping flex-between-center ">
					<h1>Calendário de torneios</h1>
					{/* <FilterSection/> */}
				</div>
			</div>
			<div className="wide-wrapping space-y-12">
				{tournamentByMonth.map(({ month, tournaments }) => (
					<div
						key={month}
						className="space-y-6 laptop:flex laptop:space-x-3">
						<div className="w-[10%]">
							<Button className="capitalize">{month}</Button>
						</div>
						<div className="grow space-y-6">
							{tournaments.map((tournament) => (
								<TournamentCalendar
									key={tournament.id}
									data={tournament}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
