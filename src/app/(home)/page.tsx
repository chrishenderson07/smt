// 'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import GridCards from '@/components/layout/GridCards'

import { getVideos } from '../api/services/entities/videos'
import { CardFetchConfigTypes } from '../api/services/service-config'
import Separator from '@/components/Separator'
import Link from 'next/link'

import { IoIosArrowForward } from 'react-icons/io'

const Home = async () => {
	const videosData = await getVideos()

	function fetchThumbnail(videoData: any) {
		try {
			const videoUrl = videoData.youtubeId
			console.log('Url', videoUrl)
			const videoThumbIndex = videoUrl?.indexOf('=')
			if (videoThumbIndex !== -1) {
				const videoThumbnail = videoUrl?.slice(videoThumbIndex + 1)
				const finalUrl = `https://img.youtube.com/vi/${videoThumbnail}/maxresdefault.jpg`

				return finalUrl
			}
		} catch (error) {
			console.error('Erro ao buscar a capa do vídeo:', error)
			return null
		}
	}

	return (
		<div className="">
			<HeroSlide>
				{videosData.map((videoData, index) => (
					<GameTeaserHero
						key={index}
						data={videoData}
						style={{
							background: `url(${fetchThumbnail(videoData)})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
						}}
					/>
				))}
			</HeroSlide>

			<section className="min-h-28">
				<div className="flex flex-col justify-center gap-6  z-[60] absolute -mt-52 ">
					<div className="pl-10">
						<Separator label="Estamos ao vivo" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			<section className="py-14">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10">
						<Separator label="Torneios Recentes" />
						<Link
							href="/"
							className="flex items-center">
							Mais
							<IoIosArrowForward size={22} />
						</Link>
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>
		</div>
	)
}

export default Home
