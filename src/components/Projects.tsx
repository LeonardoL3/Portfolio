import { useContext } from 'react'
import { githubProjects } from '../data/projects'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import Image from 'next/image'
import { TranslationContext } from '../contexts/TranslationContext'

interface ProjectsProps {
	language: 'pt'| 'en' | 'es'
}

export function Projects({language}: ProjectsProps){
	const { currentTheme } = useIconsThemeMode()
	const { t } = useContext(TranslationContext)

	return (
		<div className="grid grid-cols-projects auto-rows-fr gap-6">
			{githubProjects.map((project) => {
				return (
					<div
						key={project.cover}
						onClick={() => window.open(project.repositoryUrl, '_blank')}
						className="transition-transform duration-300 ease-out hover:scale-[1.02] cursor-pointer group min-h-[452px] flex flex-col bg-transparent border-[1px] border-solid dark:border-dark-200 border-light-900 rounded-lg overflow-hidden"
					>
						<div className='relative h-60 w-full transition-all delay-75'>
							<Image
								fill
								alt={project.title[language]}
								src={project.cover}
								style={currentTheme === 'dark' ? { filter: 'invert(1)' } : {}}
								className='object-contain bg-white'
							/>
							{project.inProgress && (
								<span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
									In Progress
								</span>
							)}
						</div>
						<div className="mx-4 flex-1 transition-all delay-75">
							<div className="pt-4">
								<h2 className="text-[18px] mb-4 font-bold dark:text-dark-100 text-light-700"> {project.title[language]} </h2>
								<p className="text-sm dark:text-dark-100 text-light-700">{project.description[language]}</p>
								{project.deploy && (
									<p className="text-sm mt-3 dark:text-dark-200 text-light-700">
										{t.view_live_prefix}{' '}
										<a
											href={project.deploy}
											target="_blank"
											rel="noopener noreferrer"
											onClick={e => e.stopPropagation()}
											className="font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity"
										>
											{t.view_live_link}
										</a>
									</p>
								)}
							</div>
						</div>
						<div className="flex items-center mx-4 pb-4 transition-all delay-75">
							<span className="dark:text-dark-200 text-light-700 font-bold flex-1">
								{project.tags.join(' | ')}
							</span>
						</div>
					</div>
				)
			})}
		</div>
	)
}
