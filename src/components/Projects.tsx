import { githubProjects } from "../mock/github-projects"
import { BiGitRepoForked } from 'react-icons/bi'

interface ProjectsProps {
	language: 'pt'| 'en' | 'es'
}

export function Projects({language}: ProjectsProps){
  return (
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
								<BiGitRepoForked size={24} />
							</span>
						</footer>
					</a>
				)
			})} 
				</div>
	)
}