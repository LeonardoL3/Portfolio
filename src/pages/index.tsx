import type { NextPage } from 'next'

import React, { useContext, useRef } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'
import { Link } from 'react-scroll'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { FaArrowDown } from 'react-icons/fa'
import { Footer, Me, Projects, Skills, Header } from '../components'
import useIsVisible from '../hooks/useIsVisible'


const Home: NextPage = () => {
	const { t, language } = useContext(TranslationContext)
	const { currentTheme } = useIconsThemeMode()
	const bk = useBreakpoint()

	const mainSecionRef = useRef<HTMLDivElement>(null)
	const isVisible = useIsVisible(mainSecionRef)

	const iconsSize = bk === 'sm' ? 40 : 80

	if (!iconsSize || !currentTheme) return null  

	return (
		<>
			<Header />
			<main id="home" className="h-screen" ref={mainSecionRef}>
				<div className="h-full grid grid-rows-document auto-cols-fr">
					<Me t={t} />
					<Skills iconsSize={iconsSize} currentTheme={currentTheme} />
				</div>
			</main>
 
			<section id="projects" className="min-h-screen">
				<div className="max-w-[1280px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.projects_description} </h2>
					<Projects language={language} />
				</div>
			</section>

			<Footer />

			<div className="fixed right-0 bottom-0 m-4 p-4">
				<Link to={isVisible ? 'projects' : 'header'} href='#' smooth={true} className="cursor-pointer" aria-hidden>
					<FaArrowDown 
						size={18} 
						style={isVisible ? {} : { rotate: '180deg' }}
						className="mx-auto animate-arrow_jumping dark:text-dark-100 text-light-700 cursor-pointer transition-all duration-300" 
					/>
				</Link>
			</div>
		</>
	)
}

export default Home

