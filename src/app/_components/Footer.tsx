import React from 'react';
import Image from 'next/image';
import LinkedIn from '~/public/linkedin.svg';
import Github from '~/public/github.svg';
import Instagram from '~/public/instagram.svg';

const Footer = () => {
    return (
        <footer className="z-50 mt-auto w-full bg-blue font-krona-one">
            <div className="md:min-h-[4.3rem5 flex min-h-[3.75rem] w-full items-center justify-between gap-9 bg-blue px-9 text-beige lg:min-h-[4.7rem]">
                <h2 className="rounded-full border-md border-beige px-[1rem] py-[0.15rem] text-h2">
                    08022024
                </h2>
                <p className="text-krub hidden text-p sm:block">
                    Designed and Developed by Yoonje Lee
                </p>
                <div className="flex gap-3">
                    <Image
                        className="h-icon-social"
                        src={LinkedIn}
                        alt="LinkedIn"
                    />
                    <Image
                        className="h-icon-social"
                        src={Github}
                        alt="Github"
                    />
                    <Image
                        className="h-icon-social"
                        src={Instagram}
                        alt="Instagram"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
