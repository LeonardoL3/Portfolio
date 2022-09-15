import React from 'react'
import { Sun, Moon } from 'phosphor-react'
import { useTheme } from 'next-themes'

const Header = () => {

	const { setTheme } = useTheme()

	return (
		<header className="sticky top-0 right-0 h-24 px-12">
			<div className="flex items-center justify-end h-full gap-4">
				<button type="button" onClick={() => setTheme('light')}>
					<Sun size={24} color="white"  />
				</button>
				<button type="button" onClick={() => setTheme('dark')}>
					<Moon size={24} color="white" />
				</button>
			</div>
		</header> 
	)
}


export default Header