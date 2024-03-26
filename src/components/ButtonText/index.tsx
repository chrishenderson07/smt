import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

interface ButtonTextProps {
	path: string
}

const ButtonText = ({ path }: ButtonTextProps) => {
	return (
		<>
			<Link
				href={path}
				className="flex items-center transition-colors duration-300 hover:text-orangeDetails">
				Mais
				<IoIosArrowForward size={22} />
			</Link>
		</>
	)
}

export default ButtonText
