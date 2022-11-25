import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

interface IconsThemeMode {
  currentIconMode: string
	IconElement: typeof FiSun | typeof FiMoon
	currentTheme: string
}

export const useIconsThemeMode = (): IconsThemeMode => {
	const [currentTheme, setCurrentTheme] = useState('')
	
	
	const { theme = '' } = useTheme()
	
	useEffect(() => {
		setCurrentTheme(theme)
	}, [theme])

	const isCurrentThemeModeLight = currentTheme && currentTheme === 'light' 

	const currentIconMode =  !isCurrentThemeModeLight ? '#FFF' : '#000'
	
	const IconElement = currentTheme && currentTheme === 'dark' ? FiMoon : FiSun 

	return {
		currentIconMode,
		IconElement,
		currentTheme
	}

}