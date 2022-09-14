import React from 'react'
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
						<p className="text-neutral-300"> I&apos;m a fullstack developer currently working with React and Node. </p>
					</div>
				</div>
			</section>

			<section id="projects" className="mb-24">
				<div className="max-w-[1189px] mx-auto px-6">
					<h2 className="text-xl md:text-3xl py-12 text-neutral-500"> Some of my projects on Github: </h2>
					<div className="grid grid-cols-projects auto-rows-fr gap-3">
						{githubProjects.map((project) => {
							return (
								<div key={project.title} className="bg-blue-400 text-center">
									<a href={project.repositoryUrl}>
										<header>
											<img src={project.cover} className="h-60 w-full object-cover" />
										</header>
										<main className="flex flex-col gap-4 justify-between h-[calc(100%-240px)]">
											<h2 className="text-xl pt-3 "> {project.title} </h2>
											<p>
												{project.description.pt}
											</p>
											<span className="pb-3">
												{project.tags.join('-')}
											</span>
										</main>
									</a>
								</div>
							)
						})} 
					</div>
				</div>
			</section>

			<footer>
				<div className="flex justify-center h-24 items-center gap-12">
					<LinkedinLogo size={24} className="hover:text-orange-400" />
					<GithubLogo size={24} className="hover:text-orange-400" />
					<Envelope size={24} className="hover:text-orange-400" />
					<WhatsappLogo size={24} className="hover:text-orange-400" />
				</div>
			</footer>

		</main>
	)
}

export default Home

