
import React, { AnchorHTMLAttributes } from 'react';
import Link from "next/link";
import Logo from "@/app/_components/Logo";

export const NavBar = () => {
    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-blue font-krona-one ">
            <div className="flex w-full items-center gap-9 min-h-[3.75rem] lg:min-h-[4.7rem] md:min-h-[4.3rem] text-beige bg-blue">
                <div className='ml-9'>
                    <Link title="Yoonje Lee" href={'/'}> </Link>
                    <Logo />
                </div>
                <NavButton href='/about'>ABOUT</NavButton>
                <NavButton href='/project'>PROJECT</NavButton>
                <NavButton href='/resume'>RESUME</NavButton>
            </div>
        </nav>
    );
};

type NavButtonProps = {
    children: React.ReactNode,
} & AnchorHTMLAttributes<HTMLAnchorElement>

const NavButton = ({ children, href }: NavButtonProps) => {
    return (
        <Link href={href as string}>
            <button className='hover:border-b-md hover:border-beige text-navlink'>{children}</button>
        </Link>
    )
}
