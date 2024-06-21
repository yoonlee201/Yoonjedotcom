
import React from 'react';
import Image from 'next/image';
import LinkedIn from '~/public/linkedin.svg'
import Github from '~/public/github.svg'
import Instagram from '~/public/instagram.svg'

const Footer = () => {
    return (
        <footer className="w-full bg-blue font-krona-one mt-auto z-50 ">
            <div className="flex w-full items-center justify-between gap-9 
                                min-h-[3.75rem] lg:min-h-[4.7rem] md:min-h-[4.3rem5 text-beige bg-blue px-9">
                <h2 className='border-beige border-md rounded-full px-[1rem] py-[0.15rem] text-h2'>
                    08022024
                </h2>
                <p className='text-krub text-p hidden sm:block'>
                    Designed and Developed by Yoonje Lee
                </p>
                <div className='flex gap-3'>
                    <Image
                        className='h-icon-social'
                        src={LinkedIn}
                        alt="LinkedIn" />
                    <Image
                        className='h-icon-social'
                        src={Github}
                        alt="Github" />
                    <Image
                        className='h-icon-social'
                        src={Instagram}
                        alt="Instagram" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;