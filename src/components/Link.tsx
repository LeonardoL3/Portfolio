import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NextLink extends LinkProps {
    children: ReactNode
    className?: string
}

export function NextLink({href, children, className, ...props}: NextLink){
    return (
        <Link href={href} target='_blank' {...props}>
            <a target='_blank' className={className}>
                {children}
            </a>
        </Link>
    )
}