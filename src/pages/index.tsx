import type { NextPage } from 'next'
import Image from 'next/image'
import { githubProjects } from '../mock/github-projects'

import { LinkedinLogo, GithubLogo, WhatsappLogo, Envelope, ArrowDown, GitFork } from 'phosphor-react'
import { useContext } from 'react'
import { TranslationContext } from '../contexts/TranslationContext'
import { Link } from 'react-scroll'

const Home: NextPage = () => {


	const { t } = useContext(TranslationContext)

	return (
		<>
			<main id="home" className="h-screen">
				<div className="flex h-[calc(100%-240px)] items-center justify-evenly flex-col lg:flex-row-reverse">
					<div className="text-[0] m-4 dt max-w-[280px] sm:max-w-full">
						{/*https://github.com/Leonardo334.png */}
						<Image
							src={'https://github.com/Leonardo334.png'}
							width="400px"
							
							height="400px"
							className="border-2 border-light-900 dark:border-light-100 rounded-full"
							quality={75}
						/>
					</div>
					<div className="mx-8">
						<span className="text-center lg:text-start text-xl md:text-3xl block py-4 text-light-900 dark:text-dark-200 dt"> {t.salutation} </span>
						<h1 className="text-center lg:text-start relative text-light-900 dark:text-dark-200 dt py-2 font-[monospace] name-typewriter-animation whitespace-nowrap w-fit mx-auto text-2xl sm:text-3xl xl:text-7xl md:text-6xl">
							Leonardo Lazzaretti.
						</h1> 
						<p className="text-center lg:text-start text-light-700 dark:text-dark-300 py-4 dt"> {t?.description} </p>
					</div>
					{/* esse -mt-24 só existe enquanto tiver smooth scroll */}
				</div>
				<Link to='projects' smooth={true} className="block mt-5">
					<ArrowDown 
						size={24} 
						className="mx-auto animate-arrow_jumping dark:text-dark-100 text-light-700 cursor-pointer" 
					/>
				</Link>
			</main>

				
 
			<section id="projects" className="mb-24">
				<div className="max-w-[1280px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-light-900 dark:text-dark-300 dt"> {t.projects} </h2>
					<div className="grid grid-cols-projects auto-rows-fr gap-6">
						{githubProjects.map((project) => {
							return (
								<a href={project.repositoryUrl} key={project.title} className="group min-h-[452px] flex flex-col bg-transparent border-[1px] border-solid dark:border-neutral-500 border-light-900 rounded-lg overflow-hidden">
									<header>
										<img src={project.cover} className="h-60 w-full object-cover group-hover:brightness-[.6] transition-all delay-75" />
									</header>
									<section className="mx-4 flex-1 group-hover:brightness-[.6] transition-all delay-75">
										<div className="pt-4">
											<h2 className="text-[18px] mb-4 font-bold dark:text-dark-100 text-light-700"> {project.title} </h2>
											<p className="text-sm dark:text-dark-100 text-light-700">
												{project.description.pt}
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

