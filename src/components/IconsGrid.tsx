import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPrisma } from 'react-icons/si'

interface IconsGridProps {
    iconsSize: 20 | 80
    currentTheme: string
}

export function IconsGrid({iconsSize, currentTheme}: IconsGridProps){

    const icons = [SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiPrisma]

    return (
        <div className="flex justify-center flex-wrap gap-8">
        {icons.map(icon => {
            const Element = icon
            return <Element size={iconsSize} color={currentTheme === 'dark' ? 'white' : 'black'} className="dt" />
        })}
        </div>
    )
}