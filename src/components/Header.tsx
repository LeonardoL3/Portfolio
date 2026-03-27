import { useContext } from 'react'
import Link from 'next/link'
import { ThemeToast } from './ThemeToast'
import { Languages } from './Languages'
import { TranslationContext } from '../contexts/TranslationContext'

export function Header(){
	const { t } = useContext(TranslationContext)

	return (
		<header id="header" className="w-full flex items-center p-4 gap-4">
			<nav className="flex-1 flex gap-6">
				<Link href="/" className="text-sm font-medium text-light-700 dark:text-dark-300 hover:text-light-900 dark:hover:text-dark-100 transition-colors">
					{t.nav_home}
				</Link>
				<Link href="/skills" className="text-sm font-medium text-light-700 dark:text-dark-300 hover:text-light-900 dark:hover:text-dark-100 transition-colors">
					{t.nav_skills}
				</Link>
				<Link href="/contact" className="text-sm font-medium text-light-700 dark:text-dark-300 hover:text-light-900 dark:hover:text-dark-100 transition-colors">
					{t.nav_contact}
				</Link>
			</nav>
			<ThemeToast />
			<Languages />
		</header>
	)
}
