import { useTheme } from 'next-themes'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { IconButton } from './IconButton'


export function ThemeToast(){

	const { currentIconMode, IconElement, currentTheme } = useIconsThemeMode() 
	const { setTheme } = useTheme()

	const switchThemes = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	if (!currentTheme) return null

	return (
		<div>
			<IconButton 
				onClick={switchThemes}
				icon={
					<IconElement 
						className="pointer-events-none" 
						size={28} 
						color={currentIconMode} 
						fill={'true'}
					/>
				}
			/>
		</div>
	)
}