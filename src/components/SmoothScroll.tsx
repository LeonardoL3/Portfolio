import { useScroll,
	useTransform,
	useSpring,
	motion } from 'framer-motion'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'


const SmoothScroll = ({ children }: {children: ReactNode}) => {
	const scrollRef = useRef<any>()
  
	const [pageHeight, setPageHeight] = useState(0)
  
	const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
		for (const entry of entries) {
			setPageHeight(entry.contentRect.height)
		}
	}, [])
  
	useEffect(() => {
		const resizeObserver = new ResizeObserver(entries =>
			resizePageHeight(entries)
		)
		scrollRef && resizeObserver.observe(scrollRef.current)
		return () => resizeObserver.disconnect()
	}, [scrollRef, resizePageHeight])
  
	const { scrollY } = useScroll() 
	const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
	const physics = { damping: 15, mass: 0.27, stiffness: 55 } 
	const spring = useSpring(transform, physics) 
  
	return (
		<>
			<motion.div
				ref={scrollRef}
				style={{ y: spring }} 
				className="scroll-container"
			>
				{children}
			</motion.div>
			<div style={{ height: pageHeight }} />
		</>
	)
}
  
export default SmoothScroll