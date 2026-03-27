import { ThemeToast } from './ThemeToast'
import { Languages } from './Languages'

export function Header(){

	return (
		<header id="header" className="w-full flex items-center p-4 gap-4 justify-end">
			<ThemeToast />
			<Languages />
		</header>
	)
}
