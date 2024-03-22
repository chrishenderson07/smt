import { Video } from '@prisma/client'
import { Button } from '../ui/button'
import Link from 'next/link'
import pageIcons from '@/utils/pageIcons'

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
				<div className="text-4xl font-extrabold uppercase text-skeleton-dark laptop:text-7xl">
					<span>{data.title}</span>
					<div className="space-x-4">
						<span>{data.description}</span>
					</div>
				</div>

				<div className="space-x-4 mt-8 ">
					<Button
						variant={'gradient'}
						size={'hero'}
						asChild>
						<Link
							href={`video/${data.id}`}
							className="space-x-2">
							<pageIcons.PlayerFill />
							<span>Assista Agora</span>
						</Link>
					</Button>
					<Button
						variant={'border'}
						size={'hero'}
						asChild>
						<Link
							href={'/'}
							className="space-x-2">
							<pageIcons.Calendar />
							<span>Calendário</span>
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
