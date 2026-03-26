import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { skills } from '../data/skills'
import { Icon } from './Icon'

interface IconsGridProps {
    iconsSize: number
    currentTheme: string
}
 
export function Skills({iconsSize, currentTheme}: IconsGridProps){

	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 5,
			spacing: 20
		},
		loop: true,
	})

	return (
		<div className="max-w-[60%] mx-auto">
			<div ref={sliderRef} className="cursor-grab keen-slider">
				{skills.map(skill => {
					return (
						<div key={skill} className="flex flex-col align-center gap-2 keen-slider__slide flex justify-center">
							<Icon variant={skill} size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
							<label> {skill} </label>
						</div>
					)
				})}
			</div>
		</div>
	)
}



