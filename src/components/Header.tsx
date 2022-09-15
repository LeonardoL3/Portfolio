import React from 'react'
import { Sun, Moon } from 'phosphor-react'
import { IconButton } from './IconButton'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { useTheme } from 'next-themes'

const Header = () => {

	const { currentDarkIconMode, currentLightIconMode } = useIconsThemeMode() 
	const { setTheme } = useTheme()

	const handleSetThemes = (event: any) => {
		setTheme(event.target.name)
	}

	return (
		<header className="fixed top-0 right-0 h-24 px-12">
			<div className="flex items-center justify-end h-full gap-4">
				<IconButton 
					name="light" 
					onClick={handleSetThemes} 
					icon={<Sun size={24} color={currentLightIconMode.color} weight={currentLightIconMode.weight} />} 
				/>
				<IconButton 
					name="dark" 
					onClick={handleSetThemes} 
					icon={<Moon size={24} color={currentDarkIconMode.color} weight={currentDarkIconMode.weight} />}
				/>
			</div>
		</header> 
	)
}


export default Header