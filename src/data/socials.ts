import type { SocialIcons } from '../components'

interface Socials {
    label: SocialIcons
    url: string
}

export const socials: Socials[] = [
	{
		label: 'GitHub',
		url: 'https://github.com/LeonardoL3'
	},
	{
		label: 'Linkedin',
		url: 'https://www.linkedin.com/in/leonardo-lazzaretti-0b02aa225/'
	},
	{
		label: 'Gmail',
		url: 'mailto:leonardolazzaretti3@gmail.com'
	}
]