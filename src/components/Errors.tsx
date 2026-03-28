import { useContext } from 'react'
import { AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
import { TranslationContext } from '../contexts/TranslationContext'

interface ErrorsProps {
	statusCode: number
}

export function Errors({ statusCode }: ErrorsProps){
	const { t } = useContext(TranslationContext)

	return (
		<section>
			<div className='flex flex-col gap-12 justify-center items-center h-screen'>
				<div className="text-dark-900 dark:text-light-100">
					<span>{statusCode}: &nbsp;</span>
					<span>{t.not_found_message}</span>
				</div>
				<Link
					href='/'
					className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-light-900 dark:border-dark-100 text-sm font-medium text-light-900 dark:text-dark-100 hover:bg-light-900 hover:text-light-100 dark:hover:bg-dark-100 dark:hover:text-dark-900 transition-colors"
				>
					{t.back_to_home} <AiFillHome size={16} />
				</Link>
			</div>
		</section>
	)
}
