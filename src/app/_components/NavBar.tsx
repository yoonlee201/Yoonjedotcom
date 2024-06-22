import React, { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import Logo from '@/app/_components/Logo';

const NavBar = () => {
    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-blue font-krona-one">
            <div className="flex min-h-[3.75rem] w-full items-center gap-9 bg-blue text-beige md:min-h-[4.3rem] lg:min-h-[4.7rem]">
                <div className="ml-9">
                    <Link
                        title="Yoonje Lee"
                        href={'/'}>
                        <Logo />
                    </Link>
                </div>
                <NavButton href="/about">ABOUT</NavButton>
                <NavButton href="/project">PROJECT</NavButton>
                <NavButton href="/resume">RESUME</NavButton>
            </div>
        </nav>
    );
};

export default NavBar;

type NavButtonProps = {
    children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavButton = ({ children, href }: NavButtonProps) => {
    return (
        <Link href={href as string}>
            <button className="text-navlink hover:border-b-md hover:border-beige">
                {children}
            </button>
        </Link>
    );
};
