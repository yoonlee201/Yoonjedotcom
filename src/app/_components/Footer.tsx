
import React from 'react';
import Image from 'next/image';
import LinkedIn from '~/public/linkedin.svg'
import Github from '~/public/github.svg'
import Instagram from '~/public/instagram.svg'

export const Footer = () => {
    return (
        <footer className="fixed left-0 bottom-0 z-50 w-full bg-blue font-krona-one">
            <div className="flex w-full items-center justify-between gap-9 min-h-[3.75rem] lg:min-h-[4.7rem] md:min-h-[4.3rem] text-beige bg-blue">
                <h2 className='ml-9 border-beige border-md rounded-full px-[1rem] py-[0.15rem] text-h2'>
                    08022024
                </h2>
                <p className='text-krub text-p '>
                    Designed and Developed by Yoonje Lee
                </p>
                <div className='flex gap-3 mr-9'>
                    <Image
                        className='h-icon-social fill-beige'
                        src={LinkedIn}
                        alt="LinkedIn"/>
                    <Image
                        className='h-icon-social'
                        src={Github}
                        alt="Github" />
                    <Image
                        className='h-icon-social fill-beige'
                        src={Instagram}
                        alt="Instagram" />

                </div>
            </div>
        </footer>
    );
};
