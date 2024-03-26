import Image from 'next/image'
import Link from 'next/link'

import menuItems from '@/utils/navigation'

import { Button } from '../ui/button'
import { Input } from '@/components/ui/input'

import Logo from '../../../public/logo-smash-tv.png'

import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineLightMode } from 'react-icons/md'

export default function NavBar() {
	return (
		<div className="grid grid-cols-12 items-center  px-3 py-3">
			<div className="col-span-3">
				<Link href="/">
					<Image
						src={Logo}
						alt="Logo"
						width={160}
					/>
				</Link>
			</div>
			{/* Input search */}
			<div className="col-span-5">
				<Input placeholder="Pesquise..." />
			</div>

			{/* Action Box */}
			<div className="col-span-4 flex justify-center gap-6 items-center">
				<Button
					size={'hero'}
					className="bg-primaryDetailsColor py-2 text-white rounded-lg accentHover"
					asChild>
					<Link
						href="/"
						className="space-x-2">
						<span>Estamos ao vivo</span>
					</Link>
				</Button>

				<IoMdNotificationsOutline
					size={28}
					className="lessScale"
				/>

				<MdOutlineLightMode
					size={28}
					className="lessScale"
				/>
			</div>
		</div>
	)
}
