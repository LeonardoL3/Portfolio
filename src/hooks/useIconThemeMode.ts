import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'phosphor-react'

interface ThemesIconsMode {
  color: string
}

interface IconsThemeMode {
  currentIconMode: ThemesIconsMode
	IconElement: typeof Sun | typeof Moon
}

export const useIconsThemeMode = (): IconsThemeMode => {


	const [themeIconMode, setThemeIconMode] = useState('')
	const { resolvedTheme } = useTheme()

	useEffect(() => setThemeIconMode(resolvedTheme || ''), [])

	const isCurrentThemeModeLight = themeIconMode === 'light' 

	const currentIconMode: ThemesIconsMode = {
		color: !isCurrentThemeModeLight ? '#FFF' : '#000'
	}

	const IconElement = resolvedTheme && resolvedTheme === 'dark' ? Moon : Sun 

	useEffect(() => {
		if (resolvedTheme){
			setThemeIconMode(resolvedTheme || '')
		}
	}, [resolvedTheme])


	return {
		currentIconMode,
		IconElement
	}

}