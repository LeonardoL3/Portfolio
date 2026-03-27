import type { NextPage } from 'next'
import { Icon } from './Icon'
import { socials } from '../data/socials'

const brandColors: Record<string, string> = {
	GitHub: 'bg-zinc-700 text-white',
	Linkedin: 'bg-[#0A66C2] text-white',
	Whatsapp: 'bg-[#25D366] text-white',
	Gmail: 'bg-[#EA4335] text-white',
}

const handles: Record<string, string> = {
	GitHub: 'github.com/LeonardoL3',
	Linkedin: 'leonardo-lazzaretti',
	Whatsapp: '+55 54 99133-2332',
	Gmail: 'leonardolazzaretti3@gmail.com',
}

const ContactMe: NextPage = () => {
	return (
		<main className="flex flex-col items-center justify-center px-6 py-4">
			<div className="grid grid-cols-contact-me auto-rows-fr sm:text-center gap-4 w-full max-w-[560px]">
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

export default ContactMe
