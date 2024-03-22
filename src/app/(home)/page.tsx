// 'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import { getVideos } from '../api/services/entities/videos'
import Image from 'next/image'

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
				console.log('Url final', finalUrl)

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
		</div>
	)
}

export default Home
