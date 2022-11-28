import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Tooltip } from './Tooltip'
import { skills } from '../data/skills'
import { Icon } from './Icon'

interface IconsGridProps {
    iconsSize: 20 | 80
    currentTheme: string
}
 
export function Skills({iconsSize, currentTheme}: IconsGridProps){

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 5,
        },
        loop: true,
		
    })

	console.log(iconsSize)

	return (
		<div className="max-w-[50%] mx-auto">
			<div ref={sliderRef} className="cursor-grab keen-slider">
				{skills.map(skill => {
					return (
						<Tooltip 
							content={skill} 
							key={skill} 
							side='top' 
							delay={600}
							className="inline-flex items-center justify-center rounded-md bg-neutral-800 text-white px-4 py-2.5 radix-side-bottom:animate-slide-up-fade radix-side-left:animate-slide-right-fade radix-side-right:animate-slide-left-fade radix-side-top:animate-slide-down-fade"
						>
							<div className="keen-slider__slide flex justify-center"> 
								<Icon variant={skill} size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
							</div>
						</Tooltip>
					)
				})}
			</div>
		</div>
	)
}



