import { HTMLAttributes, PropsWithChildren } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

export type TitleProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> &
    VariantProps<typeof titleVariants>;

export const Title = ({
    children,
    color = 'blue',
    className,
    ...rest
}: TitleProps) => {
    return (
        <h1
            className={titleVariants({ color, className })}
            {...rest}>
            {children}
        </h1>
    );
};

const titleVariants = cva('flex text-krona-one pl-[1rem] pt-[6rem] text-h1', {
    variants: {
        color: {
            blue: 'text-blue',
            beige: 'text-beige',
        },
    },
    defaultVariants: {
        color: 'blue',
    },
});
