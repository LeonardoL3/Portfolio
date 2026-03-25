import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface NextLink extends LinkProps {
    children: ReactNode
    className?: string
    external?: boolean
    'aria-label'?: string
}

export function NextLink({href, children, className, external = true, ...props}: NextLink){
	return (
		<Link href={href} target={external ? '_self' : '_blank'} className={className} {...props}>
			{children}
		</Link>
	)
}
