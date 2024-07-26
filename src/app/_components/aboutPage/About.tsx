'use client';

import Link from 'next/link';
import Image from 'next/image';
import AboutCell from '@/app/_components/aboutPage/AboutCell';
import Skillset from '@/app/_components/aboutPage/Skillset';
import Introduction from '@/app/_components/aboutPage/Introduction';
import { Title } from '@/app/_components/Title';
import { ConnectIcons } from '@/app/_components/Logo';
import ProfileImage from '~/public/images/YoonjeProfile.JPG';

const About = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center md:gap-20">
            <section className="flex flex-col items-center justify-center gap-8">
                <Title className="w-full pl-[1rem]">About Me</Title>
                <div className="flex flex-col items-center gap-9 md:flex-row-reverse md:items-end">
                    <Image
                        className="w-[15.625rem]"
                        src={ProfileImage}
                        alt="Profile"
                        width={500}
                        height={500}
                        priority
                    />
                    <AboutCell />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-8">
                <Introduction />
            </section>
            <section className="flex flex-col items-center justify-center gap-8">
                <Title>Professional Skillset</Title>
                <Skillset />
            </section>
            <section className="flex flex-col items-center justify-center gap-2 py-3">
                <Title>Find Me Here</Title>
                <ConnectIcons
                    className="flex gap-3"
                    color="blue"
                />
                <p className="text-p text-blue">
                    or contact me{' '}
                    <Link href="/contact">
                        <strong className="text-blue-2 underline hover:text-red">
                            here
                        </strong>
                    </Link>
                </p>
            </section>
        </div>
    );
};

export default About;
