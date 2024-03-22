'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import { getVideos } from '../api/services/entities/videos'
import { useState } from 'react'

const Home = async () => {
	const [thumbnailUrl, setThumbnailUrl] = useState('')

	const videosData = await getVideos()
	async function fetchThumbnail(videoData: any) {
		const videoUrl = videoData.youtubeId
		const videoThumbIndex = videoUrl?.indexOf('=')
		if (videoThumbIndex) {
			const videoThumbnail = videoUrl?.slice(videoThumbIndex + 1)
			console.log(videoThumbnail)
			const finalUrl = ` https://img.youtube.com/vi/${videoThumbnail}/maxresdefault.jpg`
			console.log(finalUrl)
			return finalUrl
		}
	}

	return (
		<div className="">
			<HeroSlide>
				<GameTeaserHero data={videosData[0]} />
			</HeroSlide>
		</div>
	)
}

export default Home
