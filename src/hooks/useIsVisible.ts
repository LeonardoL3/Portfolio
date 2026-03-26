import { useState, useEffect } from 'react'

export default function useIsVisible(ref: React.RefObject<HTMLDivElement>) {
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting)
		}, {threshold: 0.1})

		if (ref.current) observer.observe(ref.current)
		return () => observer.disconnect()
	}, [ref])

	return isIntersecting
}
