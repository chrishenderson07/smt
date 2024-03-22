'use client'

import HeroSlide from '@/components/carousel/HeroSlide'
import GameTeaserHero from '@/components/banner/GameTeaserHero'

import { fetchVideos, getVideos } from '../api/services/entities/videos'
import { useState } from 'react'

const Home = async () => {
	const [thumbnailUrl, setThumbnailUrl] = useState('')

	const videosData = await getVideos()
	async function fetchThumbnail() {
		// const response = await fetchVideos()
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
