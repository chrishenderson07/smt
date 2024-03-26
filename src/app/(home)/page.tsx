// 'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import GridCards from '@/components/layout/GridCards'

import { getVideos } from '../api/services/entities/videos'
import { CardFetchConfigTypes } from '../api/services/service-config'
import Separator from '@/components/Separator'
import Link from 'next/link'

import { IoIosArrowForward } from 'react-icons/io'
import ButtonText from '@/components/ButtonText'
import Slider from '@/components/Slider'

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

			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop flex items-center justify-between">
						<Separator label="Torneios Recentes" />
						<ButtonText path="/tournaments" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop ">
						<Separator label="Melhores Jogadas da Semana" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			{/* banner slider */}
			<section className="py-14">
				<div className=" max-w-screen-desktop">
					<Slider />
				</div>
			</section>

			{/* Torneio de tênis */}
			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop flex items-center justify-between">
						<Separator label="Pontuação nas Areias: Torneios de Tênis" />
						<ButtonText path="/tournaments" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			{/* Arenas em Destaque */}
			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop flex items-center justify-between">
						<Separator label="Arenas em Destaque" />
						<ButtonText path="/tournaments" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			{/* Aprenda com os melhores */}
			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop flex items-center justify-between">
						<Separator label="Aprenda com os Melhores" />
						<ButtonText path="/tournaments" />
					</div>
					<GridCards
						variant="tournament"
						existingData={videosData}
						dataType={CardFetchConfigTypes.GetGameTeaserVideo}
						cardProps={{ fixedMeasure: false }}></GridCards>
				</div>
			</section>

			{/* Banner */}

			<section className="py-14 ">
				<div className="bg-gray-900 max-w-screen-desktop mx-auto rounded-xl p-9 h-[220px]">
					<div className="w-1/4">
						<h4 className="text-base mb-2">Energia nas Areias</h4>
						<h2 className="text-2xl font-semibold">
							Viva a Emoção do Esporte de Areia com Smash TV!
						</h2>
					</div>
				</div>
			</section>

			{/* Resultados */}
			<section className="py-14 ">
				<div className="flex flex-col justify-center gap-6 ">
					<div className="pl-10 max-w-screen-desktop flex items-center justify-between">
						<Separator label="Resultados" />
						<ButtonText path="/tournaments" />
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
