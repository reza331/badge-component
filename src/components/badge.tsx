import { cn } from '@/lib/utils'
import React, { FC } from 'react'
import { cva } from 'class-variance-authority'

export type Appearance = 'solid' | 'subtle'
export type Variant = 'primary' | 'success' | 'destructive' | 'warning' | 'neutral'

interface BadgeProps {
    appearance?: Appearance
    variant?: Variant
    className?: string
    children: React.ReactNode
}

const badgeVariants = cva(
    'inline-flex items-center justify-center rounded-full py-1 px-2 md:px-2.5 text-xs md:text-sm',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-white',
                success: 'bg-success text-white',
                destructive: 'bg-destructive text-white',
                warning: 'bg-warning text-white',
                neutral: 'bg-neutral text-white',
            },
            appearance: {
                solid: '',
                subtle: '',
            },
        },
        compoundVariants: [
            {
                variant: 'primary',
                appearance: 'subtle',
                className: 'bg-primary-subtle text-primary',
            },
            {
                variant: 'success',
                appearance: 'subtle',
                className: 'bg-success-subtle text-success',
            },
            {
                variant: 'destructive',
                appearance: 'subtle',
                className: 'bg-destructive-subtle text-destructive',
            },
            {
                variant: 'warning',
                appearance: 'subtle',
                className: 'bg-warning-subtle text-warning',
            },
            {
                variant: 'neutral',
                appearance: 'subtle',
                className: 'bg-neutral-subtle text-neutral',
            },
        ],
        defaultVariants: {
            variant: 'primary',
            appearance: 'solid',
        },
    }
)

const Badge: FC<BadgeProps> = ({ appearance, variant, className, children }) => {
    return (
        <span
            className={cn(
                badgeVariants({
                    variant,
                    appearance,
                }),
                className
            )}
        >
            {children}
        </span>
    )
}

export default Badge