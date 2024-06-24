'use client';

import React, {
    AnchorHTMLAttributes,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/app/_components/Logo';
import MenuIcon from '~/public/menu.svg';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setIsDropdownOpen(false);
        }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-blue font-krona-one">
            <div className="flex min-h-[3.75rem] w-full items-center justify-between gap-9 bg-blue text-beige md:min-h-[4.3rem] md:justify-start lg:min-h-[4.7rem]">
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
                <button
                    ref={buttonRef}
                    type="button"
                    className="mr-9 md:hidden"
                    onClick={toggleDropdown}>
                    <Image
                    className='svg-beige'
                        src={MenuIcon}
                        alt="navigation menu"
                        width={25}
                        height={25}
                    />
                </button>
                {isDropdownOpen && <Dropdown ref={menuRef} />}
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
            <button
                type="button"
                className="hidden text-navlink hover:border-b-md hover:border-beige md:block">
                {children}
            </button>
        </Link>
    );
};

const Dropdown = forwardRef<HTMLDivElement, {}>(function ({}, ref) {
    return (
        <div
            ref={ref}
            className="absolute right-0 top-full mt-1 min-w-56 rounded-sm border border-blue bg-blue shadow-xl"
            role="menu">
            <ul className="grid grid-flow-row items-start justify-stretch">
                <li className="border-b-2 border-blue-2 px-4 py-3 text-navlink hover:bg-blue-2">
                    <Link
                        href="/about"
                        className="block h-full w-full">
                        About
                    </Link>
                </li>
                <li className="border-b-2 border-blue-2 px-4 py-3 text-navlink hover:bg-blue-2">
                    <Link
                        href="/project"
                        className="block h-full w-full">
                        Project
                    </Link>
                </li>
                <li className="px-4 py-3 text-navlink hover:bg-blue-2">
                    <Link
                        href="/resume"
                        className="block h-full w-full">
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
});
