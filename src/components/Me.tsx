import Image from 'next/image'
import { Translations } from '../types/translations'

interface MeProps {
	t: Translations
}

export function Me({t}: MeProps){
	return (
		<div className="flex items-center justify-around flex-col-reverse lg:flex-row mx-12">
			<div>
				<span className="text-center lg:text-start text-xl md:text-2xl block py-4 text-light-900 dark:text-dark-200 dt"> {t.salutation} </span>
				<h1 
					className="text-center mx-auto sm:mx-0 lg:text-start relative text-light-900 dark:text-dark-200 dt py-2 font-[monospace] name-typewriter-animation whitespace-nowrap w-fit text-2xl sm:text-3xl xl:text-7xl md:text-5xl">
					Leonardo Lazzaretti.
				</h1> 
				<p className="text-center lg:text-start text-light-700 dark:text-dark-300 py-4 dt"> {t.description} </p>
			</div>
			<div className="text-[0] border-black dark:border-white  border-2 rounded-full m-2 max-w-[168px] sm:max-w-[262px] lg:max-w-full">
				<Image
					src='/assets/me.jpeg'
					width="360px"
					alt='Leonardo lazzaretti'
					height="360px"
					className="rounded-full"
					quality={75}
				/>
			</div>
		</div>
	)
}