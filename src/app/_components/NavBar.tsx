
import React from 'react';
import Link from "next/link";
import Logo from "@/app/_components/Logo";

export const NavBar = () => {
    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-blue">
            <div className="bg-blue grid w-full grid-flow-col items-center justify-between gap-6">
                <div className="bg-blue grid grid-flow-col items-center justify-start gap-6 text-navlink max-sm:transition-all max-sm:has-[input:focus-visible]:grid-cols-[auto_1fr] max-sm:has-[input:focus-visible]:justify-between">
                    <Link title="Yoonje Lee" href={'/'}> </Link>
                    <Logo />
                </div>
            </div>
        </nav>
    );
};
