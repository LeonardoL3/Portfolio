import { Button } from './Button'
import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'

interface ErrorsProps {
    statusCode: number
    message: string
}

export function Errors({statusCode, message}: ErrorsProps){
	return (
		<section>
			<div className='flex flex-col gap-12 justify-center items-center h-screen'>
				<div className="text-dark-900 dark:text-light-100">
					<span>{statusCode}: &nbsp;</span>
					<span>{message}</span>
				</div>
				<Link href='/'>
					<Button aria-label="back to home" className="border-2 p-4 rounded-md flex items-center gap-2 dark:text-light-100 text-dark-900 dark:border-light-100 border-dark-900 hover:scale-110 transition-all">
                    Back to home <AiFillHome size={18} className='inline' /> 
					</Button> 
				</Link>
			</div>
		</section>
	)
}