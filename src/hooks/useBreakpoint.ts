import { useState, useEffect } from 'react'

export const useBreakpoint = () => {
	if (typeof window === 'undefined') return
	const [breakpoint, setBreakpoint] = useState(1200)
	const resize = () => {
		setBreakpoint(window.innerWidth)
	}

	useEffect(() => {
		if (typeof window === 'undefined') return
		window.addEventListener('resize', resize)

		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])

	
	let currentBreakpoint

	switch(true){

	case breakpoint > 640 && breakpoint <= 768:
		currentBreakpoint = 'md'
		break
	case breakpoint > 768 && breakpoint <= 1024:
		currentBreakpoint = 'lg'
		break
	case breakpoint > 1024:
		currentBreakpoint = 'xl'
		break
	default:
		currentBreakpoint = 'sm'
	}

	return currentBreakpoint
}