import React from 'react'
import { Sun, Moon } from 'phosphor-react'
import { IconButton } from './IconButton'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {

	const { currentDarkIconMode, currentLightIconMode } = useIconsThemeMode() 
	const { setTheme } = useTheme()
	const  { asPath } = useRouter()

	console.log('aspAth', asPath)

	const switchThemes = (event: any) => {
		console.log(event)
		setTheme(event.target.name)
	}


	return (
		<header>
			<div className="flex items-center justify-end gap-4 p-12">
				

				<div className=" text-black dark:text-white">
					<Link href={'/pt-br'} locale="pt-br">
						<a> [pt] </a>
					</Link>
					<Link href={'/en-us'} locale="en-us">
						<a> [en] </a>
					</Link>
					<Link href={'/es-es'} locale="es-es">
						<a> [es] </a>
					</Link>
				</div>

				<IconButton 
					name="light"  
					onClick={switchThemes}
					icon={<Sun className="pointer-events-none" size={24} color={currentLightIconMode.color} weight={currentLightIconMode.weight} />} 
				/>
				<IconButton 
					name="dark" 
					onClick={switchThemes}
					icon={<Moon className="pointer-events-none" size={24} color={currentDarkIconMode.color} weight={currentDarkIconMode.weight} />}
				/>
			</div>
		</header> 
	)
}


export default Header