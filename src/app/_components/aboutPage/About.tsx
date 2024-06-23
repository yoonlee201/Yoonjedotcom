'use client';
import AboutCell from '@/app/_components/aboutPage/AboutCell';
import Skillset from '@/app/_components/aboutPage/Skillset';

const About = () => {
    return (
        <div className="m-4 min-w-[90vw] border-2 lg:min-h-[43rem] lg:min-w-[65vw] lg:max-w-[65vw]">
            <h1 className="text-krona-one pl-[1rem] pt-[6rem] text-h1 text-blue">
                About Me
            </h1>
            <div className="max-w-[27rem] pt-4">
                <AboutCell />
            </div>
            <div className="overflow-hidden">
                <Skillset />
            </div>
        </div>
    );
};

export default About;
