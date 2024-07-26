'use client';

import { HTMLAttributes, PropsWithChildren } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

export type TitleProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> &
    VariantProps<typeof titleVariants>;

export const Title = ({
    children,
    color = 'blue',
    size = 'h1',
    className,
    ...rest
}: TitleProps) => {
    return (
        <h1
            className={titleVariants({ color, size, className })}
            {...rest}>
            {children}
        </h1>
    );
};

const titleVariants = cva('flex font-krona-one font-thin', {
    variants: {
        size: {
            h1: 'text-h1 pt-[3rem]',
            h2: 'text-h2',
            h3: 'text-h3',
        },
        color: {
            blue: 'text-blue-2',
            beige: 'text-beige',
        },
    },
    defaultVariants: {
        size: 'h1',
        color: 'blue',
    },
});
