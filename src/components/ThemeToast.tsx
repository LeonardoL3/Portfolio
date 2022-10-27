import { useTheme } from 'next-themes'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { IconButton } from './IconButton'


export function ThemeToast(){

	if(typeof window === 'undefined') return null

	const { currentIconMode, IconElement } = useIconsThemeMode() 
	const { setTheme, theme } = useTheme()

	const switchThemes = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	if (!IconElement) return null

	//className="absolute right-2/4 translate-x-2/4 mt-8"
	return (
		<div>
			<IconButton 
				onClick={switchThemes}
				icon={
					<IconElement 
						className="pointer-events-none" 
						size={28} 
						color={currentIconMode.color} 
						weight='fill' 
					/>
				}
			/>
		</div>
	)
}