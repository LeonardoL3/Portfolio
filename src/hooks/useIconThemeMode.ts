import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface ThemesIconsMode {
  weight: 'thin' | 'fill'
  color: string
}

interface useIconsThemeMode {
  currentLightIconMode: ThemesIconsMode
  currentDarkIconMode: ThemesIconsMode
}

export const useIconsThemeMode = (): useIconsThemeMode => {
	const [themeIconMode, setThemeIconMode] = useState('')
	const { resolvedTheme } = useTheme()

	const isCurrentThemeModeLight = themeIconMode === 'light' 

	const currentLightIconMode: ThemesIconsMode = {
		weight: isCurrentThemeModeLight ? 'fill' : 'thin',
		color: isCurrentThemeModeLight ? '#000' : '#FFF'
	}
  
	const currentDarkIconMode: ThemesIconsMode = {
		weight: !isCurrentThemeModeLight ? 'fill' : 'thin',
		color: !isCurrentThemeModeLight ? '#FFF' : '#000'
	}

	useEffect(() => {
		setThemeIconMode(resolvedTheme || '')
	}, [resolvedTheme])


	return {
		currentLightIconMode,
		currentDarkIconMode
	}

}