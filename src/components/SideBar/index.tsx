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
import { RiMenu4Line, RiFireFill, RiCompass3Fill } from 'react-icons/ri'

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
					<DrawerContent>
						<DrawerHeader>
							<Image
								src={Logo}
								alt="Logo"
							/>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<h3>Submit</h3>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</aside>
		</>
	)
}

export default SideBar
