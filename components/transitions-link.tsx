"use client"
import { ReactNode } from "react"
import { Link } from 'next-view-transitions'
interface Props {
    href: string
    children: ReactNode
    className?: string
}

const TransitionLink = ({ href, children, className, ...props }: Props) => {




    return (
        <Link
            href={href}
            {...props}
            className={className}
        >
            {children}
        </Link>
    )
}

export default TransitionLink