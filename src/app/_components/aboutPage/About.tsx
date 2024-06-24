'use client';

import AboutCell from '@/app/_components/aboutPage/AboutCell';
import Skillset from '@/app/_components/aboutPage/Skillset';
import { Title } from '@/app/_components/Title';
import { ConnectIcons } from '@/app/_components/Logo';
import Link from 'next/link';

const About = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[960px] flex-col items-center justify-center border-2">
            <div className="items-start justify-center">
                <Title>About Me</Title>
                <AboutCell />
            </div>
            <Title>Professional Skilset</Title>
            <Skillset />
            <div className="flex flex-col items-center justify-center gap-2 py-3">
                <Title>Find Me Here</Title>
                <ConnectIcons
                    className="flex gap-3"
                    color="blue"
                />
                <Link
                    href="/project"
                    className="text-p text-blue">
                    or contact me{' '}
                    <strong className="hover:text-red text-blue-2 underline">
                        here
                    </strong>
                </Link>
            </div>
        </div>
    );
};

export default About;
