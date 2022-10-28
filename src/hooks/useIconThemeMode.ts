import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'phosphor-react'


interface IconsThemeMode {
  currentIconMode: string
	IconElement: typeof Sun | typeof Moon
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
	
	const IconElement = currentTheme && currentTheme === 'dark' ? Moon : Sun 

	return {
		currentIconMode,
		IconElement,
		currentTheme
	}

}