import { githubProjects } from '../data/projects'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { NextLink } from './Link'
import Image from 'next/image'

interface ProjectsProps {
	language: 'pt'| 'en' | 'es'
}

export function Projects({language}: ProjectsProps){
	const { currentTheme } = useIconsThemeMode()

	return (
		<div className="grid grid-cols-projects auto-rows-fr gap-6">
			{githubProjects.map((project) => {
				return (
					<NextLink
						href={project.repositoryUrl}
						key={project.cover}
						className="transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer group min-h-[452px] flex flex-col bg-transparent border-[1px] border-solid dark:border-dark-200 border-light-900 rounded-lg overflow-hidden"
					>
						<div className='relative h-60 w-full transition-all delay-75'>
							<Image
								fill
								alt={project.title[language]}
								src={project.cover}
								style={currentTheme === 'dark' ? { filter: 'invert(1)' } : {}}
								className='object-contain bg-white' />
							{project.inProgress && (
								<span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
									In Progress
								</span>
							)}
						</div>
						<div className="mx-4 flex-1 transition-all delay-75">
							<div className="pt-4">
								<h2 className="text-[18px] mb-4 font-bold dark:text-dark-100 text-light-700"> {project.title[language]} </h2>
								<div>
									<p className="text-sm dark:text-dark-100 text-light-700">{project.description[language]}</p>
									{/* {project.deploy ? (
										<div className='block my-4' onClick={() => window.open(project.deploy, '_blank')										}>
											deploy:
											<span className='text-light-300 dark:text-dark-200 hover:underline'>
												{project.deploy}
											</span>
										</div>
									): null} */}
								</div>
							</div>
						</div>
						<div className="flex items-center mx-4 pb-4 transition-all delay-75">
							<span className="dark:text-dark-200 text-light-700 font-bold flex-1">
								{project.tags.join(' | ')}
							</span>
						</div>
					</NextLink>
				)
			})}
		</div>
	)
}
