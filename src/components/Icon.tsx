import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPrisma, SiJest, SiDocker, SiStorybook, SiGraphql, SiNextdotjs, SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { FiMoon, FiSun } from 'react-icons/fi'
import { FaEnvelope } from 'react-icons/fa'

import { SVGAttributes } from 'react'
import { ZeroCurvatureEnding } from 'three'

const skillIcons = {
	React: SiReact,
	Javascript: SiJavascript, 
	Typescript: SiTypescript,
	Node: SiNodedotjs,
	Prisma: SiPrisma,
	Jest: SiJest,
	Docker: SiDocker,
	Storybook: SiStorybook,
	Graphql: SiGraphql,
	Next: SiNextdotjs,
}

const socialIcons = {
	Github: SiGithub,
	Linkedin: SiLinkedin,
	Whatsapp: SiWhatsapp,
	Gmail: FaEnvelope
} 

const icons = Object.assign(skillIcons, socialIcons, {
	Moon: FiMoon,
	Sun: FiSun
})

export type SkillIcons = keyof typeof skillIcons
export type SocialIcons = keyof typeof socialIcons
type iconsType = keyof typeof icons 

interface IconProps extends SVGAttributes<SVGElement> {
	variant: iconsType
	size: number
}  

export function Icon({ variant, size ,...rest }: IconProps){
	const Icon = icons[variant]

	return (
		<Icon size={size} {...rest} />   
	)
}