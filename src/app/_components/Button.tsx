'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
> &
    VariantProps<typeof buttonVariants>;

export function Button({
    children,
    onClick,
    bg = 'blue',
    size = 'sm',
    rounded = 'sm',
    className,
    disabled,
    type,
    ...rest
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={buttonVariants({ bg, size, rounded, className })}
            {...rest}>
            {children}
        </button>
    );
}

const buttonVariants = cva('flex items-center justify-center gap-1 p-1', {
    variants: {
        size: {
            h1: 'text-h1 pt-[3rem]',
            h2: 'text-h2',
            h3: 'text-h3',
            sm: 'text-[0.8rem] text-p h-[1.5rem]',
        },
        bg: {
            blue: 'bg-blue text-beige',
            'blue-2': 'bg-blue-2 text-beige',
            beige: 'bg-beige text-blue',
        },
        rounded: {
            full: 'rounded-full',
            lg: 'rounded-lg',
            md: 'rounded-md',
            sm: 'rounded-sm',
        },
    },
    defaultVariants: {
        size: 'sm',
        bg: 'blue',
        rounded: 'sm',
    },
});
