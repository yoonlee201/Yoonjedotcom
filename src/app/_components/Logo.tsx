'use client';

import Image from 'next/image';
import YoonjeLogo from '~/public/YoonjeLogo.svg';
import LinkedIn from '~/public/linkedin.svg';
import Github from '~/public/github.svg';
import Instagram from '~/public/instagram.svg';
import { HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export const Logo = () => {
    return (
        <Image
            className="min-h-[3.6rem] min-w-[5.7rem]"
            src={YoonjeLogo}
            alt="Yoonje Lee's Website"
        />
    );
};

type ConnectIconsProps = HTMLAttributes<HTMLDivElement>;

export const ConnectIcons = ({
    children,
    color = 'beige',
    className,
    ...rest
}: ConnectIconsProps) => {
    return (
        <div
            className={className}
            {...rest}>
            <Image
                src={LinkedIn}
                alt="LinkedIn"
                className={`svg-${color}`}
            />
            <Image
                src={Github}
                alt="Github"
                className={`svg-${color}`}
            />
            <Image
                src={Instagram}
                alt="Instagram"
                className={`svg-${color}`}
            />
        </div>
    );
};
