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
		setTheme(event.target.name)
	}


	return (
		<header className="fixed top-0 right-0 h-24 px-12">
			<div className="flex items-center justify-end h-full gap-4">
				<IconButton 
					name="light" 
					onClick={switchThemes} 
					icon={<Sun size={24} color={currentLightIconMode.color} weight={currentLightIconMode.weight} />} 
				/>
				<IconButton 
					name="dark" 
					onClick={switchThemes} 
					icon={<Moon size={24} color={currentDarkIconMode.color} weight={currentDarkIconMode.weight} />}
				/>

				<Link href={'/pt-br'} locale="pt-br">
					<a> ptBr</a>
				</Link>
				<Link href={'/en-us'} locale="en-us">
					<a> en</a>
				</Link>
				<Link href={'/es-es'} locale="es-es">
					<a> es</a>
				</Link>
			</div>
		</header> 
	)
}


export default Header