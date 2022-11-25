import { useTheme } from 'next-themes'
import { useIconsThemeMode } from '../hooks/useIconThemeMode'
import { Button } from './Button'


export function ThemeToast(){

	const { currentIconMode, IconElement, currentTheme } = useIconsThemeMode() 
	const { setTheme } = useTheme()

	const switchThemes = () => {
		setTheme(currentTheme === 'dark' ? 'light' : 'dark')
	}

	if (!currentTheme) return null

	return (
		<div>
			<Button 
				onClick={switchThemes}>
					<IconElement 
						className="pointer-events-none" 
						size={28} 
						color={currentIconMode} 
						fill={'true'}
					/>
			</Button>
		</div>
	)
}