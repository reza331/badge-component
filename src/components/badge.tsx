import React, { FC } from 'react'

export type Appearance = 'solid' | 'subtle'
export type Variant = 'primary' | 'success' | 'destructive' | 'warning' | 'neutral'

interface BadgeProps {
    appearance?: Appearance
    variant?: Variant
    className?: string
    children: React.ReactNode
}

const getBadgeStyles = (appearance: Appearance, variant: Variant) => {
    // solid style
    if (appearance === 'solid') return { background: `var(--${variant})`, color: 'whitesmoke' }
    // subtle style
    return { background: `var(--${variant}-subtle)`, color: `var(--${variant})` }
}

const Badge: FC<BadgeProps> = ({ appearance = 'solid', variant = 'primary', className, children }) => {
    return (
        <span
            style={getBadgeStyles(appearance, variant)}
            className={`${className ?? ''} flex items-center justify-center w-fit h-fit py-1 px-2 md:px-2.5 text-xs md:text-sm rounded-full`}
        >
            {children}
        </span>
    )
}

export default Badge