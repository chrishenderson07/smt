import { Separator as Separate } from '@/components/ui/separator'

interface SeparatorProps {
	label: string
}

const Separator = ({ label }: SeparatorProps) => {
	return (
		<div>
			<h2 className="text-xl font-semibold">{label}</h2>
			<Separate className=" w-40 h-[2px] bg-gray-100 my-3" />
		</div>
	)
}

export default Separator
