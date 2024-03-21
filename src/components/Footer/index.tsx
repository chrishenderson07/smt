import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	const fbUrl = 'https://www.facebook.com/'
	const instaUrl = 'https://www.facebook.com/'
	const twitterUrl = 'https://www.facebook.com/'
	return (
		<footer className="bg-generalBackground py-24">
			<div className="max-w-4xl mx-auto flex flex-col gap-14 px-4">
				<p className="max-w-sm mx-auto text-lg text-center text-white100">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.
				</p>

				<ul className="flex justify-between flex-wrap ">
					<li className="upAnimation">
						<Link href="/about">Momentos</Link>
					</li>
					<li className="upAnimation">
						<Link href="/about">Torneios</Link>
					</li>
					<li className="upAnimation">
						<Link href="/about">Professores</Link>
					</li>
					<li className="upAnimation">
						<Link href="/about">Arenas</Link>
					</li>
					<li className="upAnimation">
						<Link href="/about">Notícias</Link>
					</li>
				</ul>

				<div className="flex justify-center items-center gap-8">
					<a
						href={fbUrl}
						className="lessScale">
						<FaFacebookF size={32} />
					</a>
					<a
						href={twitterUrl}
						className="lessScale">
						<FaTwitter size={32} />
					</a>
					<a
						href={instaUrl}
						className="lessScale">
						<FaInstagram size={32} />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
