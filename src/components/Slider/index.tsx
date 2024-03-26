'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import Image from 'next/image'

const Slider = () => {
	const slides = [
		{
			image: require('../../../public/images/patrocinadores/patrocinadores.webp'),
		},
		{
			image: require('../../../public/images/patrocinadores/patrocinadores.webp'),
		},
		{
			image: require('../../../public/images/patrocinadores/patrocinadores.webp'),
		},
	]
	return (
		<>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className="mySwaper">
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<Image
							src={slide.image}
							alt="patrocinadores"
							className="w-full"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Slider
