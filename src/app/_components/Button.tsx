'use client';

import Image from 'next/image'; // Assuming you're using Next.js
import NextLink from 'next/link'; // Import Next.js Link component
import React from 'react';

type CustomLinkProps = {
    href: string;
    color?: 'blue' | 'beige';
    src: string;
    alt: string;
    className?: string;
    children: React.ReactNode;
};

export default function CustomLink({
    children,
    color = 'blue',
    href,
    src,
    alt,
    className,
    ...rest
}: CustomLinkProps) {
    return (
        <NextLink
            href={href}
            className={`flex h-[1.5rem] items-center gap-1 rounded-sm bg-blue p-1 text-[0.8rem] text-p text-${color === 'beige' ? 'blue' : 'beige'} ${className || ''}`}
            {...rest}>
            <Image
                src={src}
                alt={alt}
                className={`svg-${color} h-[90%] w-[90%]`}
                width={24} // Add appropriate width
                height={24} // Add appropriate height
            />
            {children}
        </NextLink>
    );
}
