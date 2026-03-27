import type { NextPage } from 'next'
import { useContext } from 'react'
import { Icon } from '../components/Icon'
import { TranslationContext } from '../contexts/TranslationContext'
import { socials } from '../data/socials'

const brandColors: Record<string, string> = {
	Github: 'bg-zinc-700 text-white',
	Linkedin: 'bg-[#0A66C2] text-white',
	Whatsapp: 'bg-[#25D366] text-white',
	Gmail: 'bg-[#EA4335] text-white',
}

const handles: Record<string, string> = {
	Github: 'github.com/LeonardoL3',
	Linkedin: 'leonardo-lazzaretti',
	Whatsapp: '+55 54 99133-2332',
	Gmail: 'leonardolazzaretti3@gmail.com',
}

const Contact: NextPage = () => {
	const { t } = useContext(TranslationContext)

	return (
		<main className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-6 py-12">
			<h1 className="text-2xl md:text-3xl font-bold mb-10 text-light-900 dark:text-dark-300">
				{t.nav_contact}
			</h1>
			<div className="grid grid-cols-2 gap-4 w-full max-w-[560px]">
				{socials.map(social => (
					<a
						key={social.label}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`${brandColors[social.label]} rounded-2xl p-8 flex flex-col gap-3 cursor-pointer hover:opacity-90 transition-opacity`}
					>
						<Icon variant={social.label} size={32} />
						<span className="font-bold text-lg">{social.label}</span>
						<span className="text-sm opacity-75 break-all">{handles[social.label]}</span>
					</a>
				))}
			</div>
		</main>
	)
}

export default Contact
