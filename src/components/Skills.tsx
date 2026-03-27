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
		<main className="flex flex-col items-center px-6">
			<div className="grid grid-cols-skills auto-rows-fr gap-12 max-w-[800px] w-full">
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

			<div className="pt-16">
				<a
					href="/files/Leonardo_Lazzaretti_Resume.docx"
					download="Leonardo_Lazzaretti_Resume.docx"
					className="inline-block px-6 py-2.5 rounded-md border border-light-900 dark:border-dark-100 text-sm font-medium text-light-900 dark:text-dark-100 hover:bg-light-900 hover:text-light-100 dark:hover:bg-dark-100 dark:hover:text-dark-900 transition-colors"
				>
					{t.download_resume}
				</a>
			</div>
		</main>
	)
}

export default Skills
