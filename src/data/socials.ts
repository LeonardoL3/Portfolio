import type { SocialIcons } from '../components'

interface Socials {
    label: SocialIcons
    url: string
}

export const socials: Socials[] = [
	{
		label: 'Github',
		url: 'https://github.com/LeonardoL3'
	},
	{
		label: 'Linkedin',
		url: 'https://www.linkedin.com/in/leonardo-lazzaretti-0b02aa225/'
	},
	{
		label: 'Whatsapp',
		url: 'https://api.whatsapp.com/send?phone=5554991332332'
	},
	{
		label: 'Gmail',
		url: 'mailto:leonardolazzaretti3@gmail.com'
	}
]