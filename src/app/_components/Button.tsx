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

const buttonVariants = cva('flex items-center justify-center gap-1 ', {
    variants: {
        size: {
            xl: 'text-h1',
            lg: 'text-h3 w-[10rem] h-[3rem]',
            md: 'text-p h-[2rem] p-2',
            sm: 'text-[0.8rem] text-p h-[1.5rem] p-1',
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
