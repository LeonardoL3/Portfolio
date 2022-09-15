import type { NextPage } from 'next'
import Image from 'next/image'
import { githubProjects } from '../mock/github-projects'

import { LinkedinLogo, GithubLogo, WhatsappLogo, Envelope } from 'phosphor-react'


const Home: NextPage = () => {
	return (
		<main>
			<section id="home">
				<div className="flex h-screen items-center justify-center flex-col">

					<div className="rounded-full overflow-hidden border-2 border-solid border-neutral-300 w-[222px] h-[222px]">
						<Image
							src={'https://github.com/Leonardo334.png'}
							width="222px"
							height="222px"
							className="rounded-full border-2 border-solid border-stone-500"
							quality={100}
						/>
					</div>
					<div className="text-center mx-8">
						<h1 className="text-neutral-500 text-5xl py-8"> Leonardo Lazzaretti </h1>
						<p className="text-neutral-300"> I&apos;m a fullstack web developer currently working with React and Node. </p>
					</div>
				</div>
				
			</section>
 
			<section id="projects" className="mb-24">
				<div className="max-w-[1280px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-neutral-300"> Some of my projects on Github: </h2>
					<div className="grid grid-cols-projects auto-rows-fr gap-3">
						{githubProjects.map((project) => {
							return (
								<a href={project.repositoryUrl} key={project.title} className="group min-h-[452px] bg-transparent border-[1px] border-solid border-neutral-500 rounded-lg overflow-hidden">
									<header>
										<img src={project.cover} className="h-60 w-full object-cover" />
									</header>
									{/* h-[calc(100%-240px)] */}
									<section className="group-hover:brightness-50 h-[calc(100%-240px)] flex flex-col justify-between gap-y-4 mx-4">
										<div className="pt-4">
											<h2 className="text-[18px] mb-4 font-bold"> {project.title} </h2>
											<p className="text-sm">
												{project.description.pt}
											</p>
										</div>
										<span className="text-neutral-500 pb-4 font-bold">
											{project.tags.join(' | ')}
										</span>
									</section>
								</a>
							)
						})} 
					</div>
				</div>
			</section>

			<footer>
				<div className="flex justify-center h-24 items-center gap-12">
					<LinkedinLogo alt="Linkedin" size={24} className="hover:text-orange-400" />
					<GithubLogo alt="Github" size={24} className="hover:text-orange-400" />
					<Envelope alt="Gmail" size={24} className="hover:text-orange-400" />
					<WhatsappLogo alt="WhatsApp" size={24} className="hover:text-orange-400" />
				</div>
			</footer>

		</main>
	)
}

export default Home

