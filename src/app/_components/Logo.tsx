'use client';

import Image from 'next/image';
import YoonjeLogo from '~/public/images/YoonjeLogo.svg';
import LinkedIn from '~/public/icons/linkedin.svg';
import Github from '~/public/icons/github.svg';
import Instagram from '~/public/icons/instagram.svg';
import { HTMLAttributes } from 'react';
import Link from 'next/link';

export const Logo = () => {
    return (
        <Image
            className="min-h-[3.6rem] min-w-[5.7rem]"
            src={YoonjeLogo}
            width={8}
            height={8}
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
            <Link href={'https://www.linkedin.com/in/yoonje-lee/'}>
                <Image
                    src={LinkedIn}
                    alt="LinkedIn"
                    width={25}
                    height={25}
                    className={`svg-${color}`}
                />
            </Link>
            <Link href={'https://github.com/yoonlee201'}>
                <Image
                    src={Github}
                    alt="Github"
                    width={25}
                    height={25}
                    className={`svg-${color}`}
                />
            </Link>
            <Link href={'https://www.instagram.com/while._.ylee/?hl=en'}>
                <Image
                    src={Instagram}
                    width={25}
                    height={25}
                    alt="Instagram"
                    className={`svg-${color}`}
                />
            </Link>
        </div>
    );
};
