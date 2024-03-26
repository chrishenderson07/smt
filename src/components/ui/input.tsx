import * as React from 'react'

import { cn } from '@/lib/utils'
import { FiSearch } from 'react-icons/fi'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<div
				className={cn(
					'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2 bg-[#2E3034]',
					className,
				)}>
				<FiSearch size={20} />
				<input
					type={type}
					className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-[#2E3034]"
					ref={ref}
					{...props}
				/>
			</div>
		)
	},
)
Input.displayName = 'Input'

export { Input }
