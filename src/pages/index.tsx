import type { NextPage } from 'next'
import Image from 'next/image'
import { githubProjects } from '../mock/github-projects'

import { LinkedinLogo, GithubLogo, WhatsappLogo, Envelope, ArrowDown, GitFork } from 'phosphor-react'
import React, { useContext } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'
import { Link } from 'react-scroll'
import { ThemeToast } from '../components/ThemeToast'
import { Languages } from '../components/Languages'
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPrisma } from 'react-icons/si'
import { useBreakpoint } from '../hooks/useBreakpoint'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'

const Home: NextPage = () => {

	const { t, language } = useContext(TranslationContext)
	const { currentTheme } = useIconsThemeMode()
	const bk = useBreakpoint()

	console.log(t)

	const iconsSize = bk === 'sm' ? 20 : 80

	if (!iconsSize || !currentTheme) return null

	return (
		<>
			<header className="w-full justify-center sm:justify-end flex items-center gap-4 p-4">
				<ThemeToast />
				<Languages />
			</header>
			<main className="h-[calc(100vh-66px)] sm:h-screen">
				<div className="h-full grid grid-rows-document auto-cols-fr items-center">
					<div className="flex items-center justify-around flex-col-reverse lg:flex-row mx-12">
						<div>
							<span className="text-center lg:text-start text-xl md:text-2xl block py-4 text-light-900 dark:text-dark-200 dt"> {t?.salutation} </span>
							<h1 
								className="text-center mx-auto sm:mx-0 lg:text-start relative text-light-900 dark:text-dark-200 dt py-2 font-[monospace] name-typewriter-animation whitespace-nowrap w-fit text-2xl sm:text-3xl xl:text-7xl md:text-5xl">
								Leonardo Lazzaretti.
							</h1> 
							<p className="text-center lg:text-start text-light-700 dark:text-dark-300 py-4 dt"> {t?.description} </p>
						</div>
						<div className="text-[0] border-black dark:border-white  border-2 rounded-full m-2 max-w-[168px] sm:max-w-[262px] lg:max-w-full">
							<Image
								src={'https://github.com/Leonardo334.png'}
								width="360px"
								height="360px"
								className="rounded-full"
								quality={75}
							/>
						</div>
					</div>
					<div className="flex justify-center flex-wrap gap-8">
						<SiReact size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
						<SiJavascript size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
						<SiTypescript size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'}className="dt"  />
						<SiNodedotjs size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
						<SiPrisma size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'}  className="dt"/>
					</div>
					<Link to='projects' smooth={true} className="block mb-4">
						<ArrowDown 
							size={24} 
							className="mx-auto animate-arrow_jumping dark:text-dark-100 text-light-700 cursor-pointer" 
						/>
					</Link>
				</div>
			</main>
 
			<section id="projects" className="min-h-screen">
				<div className="max-w-[1280px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t?.projects_description} </h2>
					<div className="grid grid-cols-projects auto-rows-fr gap-6">
						{githubProjects.map((project) => {
							return (
								<a href={project.repositoryUrl} key={project.cover} className="group min-h-[452px] flex flex-col bg-transparent border-[1px] border-solid dark:border-neutral-500 border-light-900 rounded-lg overflow-hidden">
									<header>
										<img src={project.cover} className="h-60 w-full object-cover group-hover:brightness-[.6] transition-all delay-75" />
									</header>
									<section className="mx-4 flex-1 group-hover:brightness-[.6] transition-all delay-75">
										<div className="pt-4">
											<h2 className="text-[18px] mb-4 font-bold dark:text-dark-100 text-light-700"> {project.title[language]} </h2>
											<p className="text-sm dark:text-dark-100 text-light-700">
												{project.description[language]}
											</p>
										</div>
									</section>
									<footer className="flex items-center mx-4 pb-4 group-hover:brightness-[.6] transition-all delay-75">
										<span className="dark:text-neutral-500 text-light-700 font-bold flex-1">
											{project.tags.join(' | ')}
										</span>
										<span className="dark:text-neutral-500 text-light-700">
											<GitFork size={24} />
										</span>
									</footer>
								</a>
							)
						})} 
					</div>
				</div>
			</section>

			<footer>
				<div className="flex justify-center h-24 items-center gap-12 text-black dark:text-white">
					<LinkedinLogo alt="Linkedin" size={24} className="cursor-pointer" />
					<GithubLogo alt="Github" size={24} className="cursor-pointer" />
					<Envelope alt="Gmail" size={24} className="cursor-pointer" />
					<WhatsappLogo alt="WhatsApp" size={24} className="cursor-pointer" />
				</div>
			</footer>
		</>
	)
}

export default Home

