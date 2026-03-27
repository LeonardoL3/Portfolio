import type { NextPage } from 'next'
import { useContext } from 'react'
import { Icon } from '../components/Icon'
import { TranslationContext } from '../contexts/TranslationContext'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { skills } from '../data/skills'

const Skills: NextPage = () => {
	const { t } = useContext(TranslationContext)
	const { currentTheme } = useIconsThemeMode()

	if (!currentTheme) return null

	return (
		<main className="min-h-[calc(100vh-8rem)] flex flex-col items-center px-6 py-12">
			<h1 className="text-2xl md:text-3xl font-bold mb-10 text-light-900 dark:text-dark-300">
				{t.nav_skills}
			</h1>
			<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8 max-w-[800px] w-full">
				{skills.map(skill => (
					<div key={skill} className="flex flex-col items-center gap-2">
						<Icon
							variant={skill}
							size={48}
							color={currentTheme === 'dark' ? 'white' : 'black'}
						/>
						<span className="text-xs text-light-700 dark:text-dark-300">{skill}</span>
					</div>
				))}
			</div>
		</main>
	)
}

export default Skills
