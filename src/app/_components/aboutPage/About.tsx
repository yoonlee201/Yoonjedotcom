'use client';
import AboutCell from '@/app/_components/aboutPage/AboutCell';
import Skillset from '@/app/_components/aboutPage/Skillset';
import { Title } from '@/app/_components/Title';

const About = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[960px] flex-col items-center justify-center border-2">
            <div className="items-start justify-center">
                <Title>About Me</Title>
                <AboutCell />
            </div>
            <div className="w-[90%] overflow-hidden">
                <Skillset />
            </div>
        </div>
    );
};

export default About;
