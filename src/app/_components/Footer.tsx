'use client';

import React from 'react';
import Image from 'next/image';
import LinkedIn from '~/public/linkedin.svg';
import Github from '~/public/github.svg';
import Instagram from '~/public/instagram.svg';

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
                <div className="flex gap-3">
                    <Image
                        src={LinkedIn}
                        alt="LinkedIn"
                    />
                    <Image
                        src={Github}
                        alt="Github"
                    />
                    <Image
                        src={Instagram}
                        alt="Instagram"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
