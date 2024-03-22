// 'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import { getVideos } from '../api/services/entities/videos'
import Image from 'next/image'
// import { useState } from 'react'

const Home = async () => {
	// const [thumbnailUrl, setThumbnailUrl] = useState<string[]>([])
	const videosData = await getVideos()

	// const thumbnailsUrls = videosData.map((video) => {
	// 	const url = fetchThumbnail(video)
	// 	console.log(url)
	// 	return url
	// })

	// const fetchData = async () => {
	// 	try {
	// 		const videos = await getVideos()
	// 		const updatedVideosData = await Promise.all(
	// 			videos.map(async (video) => {
	// 				const thumbnailUrl = await fetchThumbnail(video)
	// 				return { ...video, thumbnailUrl }
	// 			}),
	// 		)
	// 		videosData = updatedVideosData
	// 	} catch (error) {
	// 		console.error('Erro ao buscar os vídeos:', error)
	// 	}
	// }

	// fetchData()

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
