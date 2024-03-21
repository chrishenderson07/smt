'use client'

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'

import Link from 'next/link'
import { useContext, createContext, useState } from 'react'
import { RiMenu4Line, RiFireFill, RiCompass3Fill } from 'react-icons/ri'

import Soccer from '../../../public/icons/nav/Soccer.svg'
import PingPong from '../../../public/icons/nav/PingPong.svg'
import VolleyballServe from '../../../public/icons/nav/VolleyballServe.svg'
import TennisRacquet from '../../../public/icons/nav/TennisRacquet.svg'

import Image from 'next/image'
import { Button } from '../ui/button'
const SidebarContext = createContext<any>(null)
const SideBar = ({ children }: { children?: React.ReactNode }) => {
	const [expanded, setExpanded] = useState(true)

	return (
		<>
			<aside className="bg-pageBackground h-screen px-6 py-7 w-[72px] border-r border-b border-solid border-[#313131]">
				<nav className="h-full flex flex-col justify-center items-center ">
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
								<RiFireFill
									size={24}
									className="lessScale"
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
					{/* <SidebarContext.Provider value={{ expanded }}>
						<div className="flex flex-col">{children}</div>
					</SidebarContext.Provider> */}
				</nav>

				<Drawer>
					<DrawerTrigger>Open</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<h3>Submit</h3>
							<DrawerClose>
								<h4>Cancel</h4>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</aside>
		</>
	)
}

export default SideBar
