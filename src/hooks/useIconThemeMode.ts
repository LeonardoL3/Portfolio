import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'

interface IconsThemeMode {
  currentIconMode: string
	IconElement: typeof FiSun | typeof FiMoon
	currentTheme: string
}

export const useIconsThemeMode = (): IconsThemeMode => {
	const { resolvedTheme = '' } = useTheme()

	const currentIconMode = resolvedTheme === 'light' ? '#000' : '#FFF'
	const IconElement = resolvedTheme === 'dark' ? FiMoon : FiSun

	return {
		currentIconMode,
		IconElement,
		currentTheme: resolvedTheme
	}
}
