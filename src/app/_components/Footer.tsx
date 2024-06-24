'use client';

import React from 'react';
import { ConnectIcons } from '@/app/_components/Logo';

const Footer = () => {
    return (
        <footer className="z-50 mt-auto w-full bg-blue font-krona-one">
            <div className="flex min-h-[3.75rem] w-full flex-col items-start justify-center gap-3 bg-blue px-9 py-4 text-beige md:min-h-[4.3rem] md:flex-row md:items-center md:justify-between lg:min-h-[4.7rem]">
                <h2 className="rounded-full border-md border-beige px-[1rem] text-h2">
                    08022024
                </h2>
                <p className="text-krub text-p">
                    Designed and Developed by Yoonje Lee
                </p>
                <ConnectIcons className="flex gap-3" />
            </div>
        </footer>
    );
};

export default Footer;
