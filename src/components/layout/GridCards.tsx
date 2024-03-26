import React from 'react'
import { getCardFetchedConfig } from '@/app/api/services/service-config'
import Image from 'next/image'
import { Link } from 'lucide-react'

export const gridVariantStyles = {
	gameTeaserCard: 'grid grid-cols-gameTeaserCard',
	arena: 'grid grid-cols-gameTeaserCard',
	tournament: 'grid grid-cols-tournamentCard',
	teacher: 'grid grid-cols-teacherCard',
}

type variantType = keyof typeof gridVariantStyles

export default async function GridCards({
	dataType,
	existingData,
	fetchDataProp,
	cardProps,
	variant,
}: {
	dataType: string
	existingData?: any[]
	fetchDataProp?: {}
	cardProps?: {}
	variant: variantType
}) {
	let { datas = [], Component } = await getCardFetchedConfig(
		dataType,
		existingData,
	)

	function fetchThumbnail(videoUrl: any) {
		const videoThumbIndex = videoUrl?.indexOf('=')

		const videoThumbnail = videoUrl?.slice(videoThumbIndex + 1)
		const finalUrl = `https://img.youtube.com/vi/${videoThumbnail}/maxresdefault.jpg`

		return finalUrl
	}

	return (
		<div
			className={`wide-wrapping max-w-[100vw] gap-6  ${gridVariantStyles[variant]}`}>
			{datas?.map((data) => (
				<>
					<div key={data.id}>
						<div className="ronded-lg bg-cover bg-center bg-no-repeat relative"></div>
						<a href={`/video/${data.id}`}>
							<Image
								src={fetchThumbnail(data.youtubeId)}
								width={320}
								height={200}
								alt="Thumbnail"
								className="rounded-xl mb-2"
							/>
							<h1 className="font-medium">{data.description}</h1>
						</a>
					</div>
					{/* {Component && (
						<Component
							fixedMeasure={true}
							data={data}
							key={data.id}
							{...cardProps}
						/>
					)} */}
				</>
			))}
		</div>
	)
}
