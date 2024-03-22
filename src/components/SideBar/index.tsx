'use client'

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from '@/components/ui/drawer'

import Link from 'next/link'
import { useContext, createContext, useState } from 'react'
import {
	RiMenu4Line,
	RiFireFill,
	RiCompass3Fill,
	RiAirplayFill,
	RiSortAsc,
	RiNewspaperLine,
} from 'react-icons/ri'

import { CiGrid42, CiCalendar } from 'react-icons/ci'
import { HiOutlineVideoCamera } from 'react-icons/hi2'

import Talk from '../../../public/icons/nav/Talk.svg'
import Soccer from '../../../public/icons/nav/Soccer.svg'
import PingPong from '../../../public/icons/nav/PingPong.svg'
import VolleyballServe from '../../../public/icons/nav/VolleyballServe.svg'
import TennisRacquet from '../../../public/icons/nav/TennisRacquet.svg'

import Logo from '../../../public/logo-smash-tv.png'

import Image from 'next/image'
const SideBar = () => {
	const [expanded, setExpanded] = useState(false)

	console.log(expanded)
	return (
		<>
			<aside className="bg-pageBackground h-screen z-20 relative">
				<nav className="h-full px-6 py-7 w-[72px] border-r border-b border-solid border-[#313131] flex flex-col justify-center items-center ">
					<RiMenu4Line
						size={24}
						className="lessScale mb-16"
						onClick={() => setExpanded((curr) => !curr)}
					/>
					<div className="flex flex-col gap-14">
						<div className="pages flex flex-col  gap-8">
							<Link href="/">
								<RiFireFill
									size={24}
									className="lessScale"
								/>
							</Link>
							<Link href="/">
								<RiCompass3Fill
									size={24}
									className="lessScale"
								/>
							</Link>
							<Link href="/">
								<Image
									src={Talk}
									className="lessScale"
									alt="Icone Talk"
								/>
							</Link>
						</div>
						<div className="border-b-2 border-solid border-[#A4A4A4] w-[24px] mx-auto"></div>
						<div className="pages flex flex-col  gap-8">
							<Link href="/">
								<Image
									src={Soccer}
									className="lessScale"
									alt="Icone Football"
								/>
							</Link>
							<Link href="/">
								<Image
									src={PingPong}
									className="lessScale"
									alt="Icone PingPong"
								/>
							</Link>
							<Link href="/">
								<Image
									src={VolleyballServe}
									className="lessScale"
									alt="Icone Volleyball"
								/>
							</Link>
							<Link href="/">
								<Image
									src={TennisRacquet}
									className="lessScale"
									alt="Icone Tenis"
								/>
							</Link>
						</div>
					</div>
				</nav>

				<Drawer
					direction="left"
					open={expanded}
					modal={false}>
					<DrawerContent className="px-6">
						<DrawerHeader className="mb-20">
							<Image
								src={Logo}
								alt="Logo"
								width={85}
							/>
						</DrawerHeader>

						<DrawerDescription className="flex flex-col gap-10">
							<DrawerTitle className="text-sm text-white500 font-normal uppercase">
								Menu
							</DrawerTitle>

							<nav className="space-y-5">
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<CiGrid42 size={24} />
									<h3 className="text-base font-normal">Página Inicial</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<HiOutlineVideoCamera size={24} />
									<h3 className="text-base font-normal">Momentos</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<CiCalendar size={24} />
									<h3 className="text-base font-normal">
										Calendário dos Torneios
									</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<RiAirplayFill size={24} />
									<h3 className="text-base font-normal">Arenas</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<RiSortAsc size={24} />
									<h3 className="text-base font-normal">Professores</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex gap-4 accentHover">
									<RiNewspaperLine size={24} />
									<h3 className="text-base font-normal">Professores</h3>
								</Link>
							</nav>
						</DrawerDescription>

						<DrawerDescription className="mt-10 flex flex-col gap-10">
							<DrawerTitle className="text-sm text-white500 font-normal uppercase">
								Esportes
							</DrawerTitle>

							<nav className="space-y-5">
								<Link
									href="/"
									className="text-white500 flex items-center gap-4 accentHover fill">
									<Image
										src={Soccer}
										width={24}
										alt="Icone Football"
									/>

									<h3 className="text-base font-normal">Futevôlei</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex items-center gap-4 accentHover">
									<Image
										src={PingPong}
										width={24}
										alt="Icone Frescobol"
									/>
									<h3 className="text-base font-normal">Frescobol</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex items-center gap-4 accentHover">
									<Image
										src={VolleyballServe}
										width={24}
										alt="Icone Volleyball"
									/>
									<h3 className="text-base font-normal">Vôlei</h3>
								</Link>
								<Link
									href="/"
									className="text-white500 flex items-center gap-4 accentHover">
									<Image
										src={TennisRacquet}
										width={24}
										alt="Icone Tenis"
									/>
									<h3 className="text-base font-normal">Tênis</h3>
								</Link>
							</nav>
						</DrawerDescription>
					</DrawerContent>
				</Drawer>
			</aside>
		</>
	)
}

export default SideBar
