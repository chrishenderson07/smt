import { Video } from '@prisma/client'
import { Button } from '../ui/button'
import Link from 'next/link'
import pageIcons from '@/utils/pageIcons'

import { IoPlayCircle } from 'react-icons/io5'

interface Props {
	data: Video
	style?: React.CSSProperties
}

export default function GameTeaserHero({ data, style }: Props) {
	return (
		<div
			className="py-[26vw] max-h-[90vh] flex items-center relative gradient-bg"
			style={style}>
			<div className="z-50 wide-wrapping w-full ">
				<div className="text-4xl font-extrabold uppercase text-lightBackground laptop:text-7xl">
					<h1 className="font-bold text-3xl">{data.title}</h1>
					<div className="space-x-4">
						<h2 className="font-bold text-3xl">{data.description}</h2>
					</div>
				</div>

				<div className="space-x-4 mt-8 flex items-center ">
					<Button
						size={'hero'}
						className="bg-primaryDetailsColor text-white rounded-lg accentHover"
						asChild>
						<Link
							href={`video/${data.id}`}
							className="space-x-2">
							<IoPlayCircle size={20} />
							<span>Assistir o Jogo</span>
						</Link>
					</Button>
					<Button
						variant={'border'}
						size={'hero'}
						className=" text-white rounded-lg transition-all duration-300 border-lightBackground hover:bg-lightBackground hover:text-primaryDetailsColor hover:border-lightBackground"
						asChild>
						<Link
							href={'/'}
							className="space-x-2">
							<pageIcons.Calendar />
							<span>Calendário dos Torneios</span>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
