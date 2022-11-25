import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface NextLink extends LinkProps {
    children: ReactNode
    className?: string
    external?: boolean
}

export function NextLink({href, children, className, external = true, ...props}: NextLink){
	return (
		<Link href={href} target={external ? '_self' : '_blank'} {...props}>
			<a target='_blank' className={className}>
				{children}
			</a>
		</Link>
	)
}