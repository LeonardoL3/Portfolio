import { Languages } from './Languages'
import { ThemeToast } from './ThemeToast'

export function Header(){
	return (
		<header className="w-full justify-center sm:justify-end flex items-center gap-4 p-4">
			<ThemeToast />
			<Languages />
		</header>
	)
    
}