import { socials } from '../data/socials'
import { Icon } from './Icon'
import { NextLink } from './Link'

export function Footer(){
	return (
		<footer>
			<div className="flex justify-center h-24 items-center gap-12 text-black dark:text-white">
				{socials.map(social => (
					<NextLink aria-label={social.label} href={social.url} key={social.label}>
						<a>
							<Icon variant={social.label} size={24} />
						</a>
					</NextLink>
				))}
			</div>
		</footer>
	)
}