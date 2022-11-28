import type { NextPage } from 'next'

import React, { useContext } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'
import { Link } from 'react-scroll'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { FaArrowDown } from 'react-icons/fa'
import { Footer, Me, Projects, Skills, Header } from '../components'
import { Tooltip } from '../components/Tooltip'


const Home: NextPage = () => {

	const { t, language } = useContext(TranslationContext)
	const { currentTheme } = useIconsThemeMode()
	const bk = useBreakpoint()

	const iconsSize = bk === 'sm' ? 20 : 80

	if (!iconsSize || !currentTheme) return null

	return (
		<>
			<Header />
			<main className="h-[calc(100vh-66px)] sm:h-screen">
				<div className="h-full grid grid-rows-document auto-cols-fr items-center">
					<Me t={t} />
					<Skills iconsSize={iconsSize} currentTheme={currentTheme} />
					<Link to='projects' smooth={true} className="block mb-4" aria-hidden>
						<FaArrowDown 
							size={18} 
							className="mx-auto animate-arrow_jumping dark:text-dark-100 text-light-700 cursor-pointer" 
						/>
					</Link>
				</div>
			</main>
 
			<section id="projects" className="min-h-screen">
				<div className="max-w-[1280px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.projects_description} </h2>
					<Projects language={language} />
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Home

