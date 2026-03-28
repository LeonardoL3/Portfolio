import type { NextPage } from 'next'

import React, { useContext, useRef } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'
import { Link } from 'react-scroll'
import { FaArrowDown } from 'react-icons/fa'
import { Me, Projects } from '../components'
import useIsVisible from '../hooks/useIsVisible'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'


const Home: NextPage = () => {
	const { t, language } = useContext(TranslationContext)

	const mainSectionRef = useRef<HTMLDivElement>(null)
	const isVisible = useIsVisible(mainSectionRef)

	return (
		<>
			<main id="home" className="h-screen flex items-center" ref={mainSectionRef}>
				<Me t={t} />
			</main>
 
			<section id="projects">
				<div className="px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.projects_description} </h2>
					<Projects language={language} />
				</div>
			</section>

			<section id="skills">
				<div className="mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.skills_description} </h2>
					<Skills />
				</div>
			</section>

			<section id="contact-me">
				<div className="mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.contact_me_description} </h2>
					<ContactMe />
				</div>
			</section>

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

