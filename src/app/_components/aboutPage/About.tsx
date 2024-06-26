'use client';

import AboutCell from '@/app/_components/aboutPage/AboutCell';
import Skillset from '@/app/_components/aboutPage/Skillset';
import { Title } from '@/app/_components/Title';
import { ConnectIcons } from '@/app/_components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import Frame from '~/public/imageFrame.svg';

const About = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center md:gap-20">
            <section className="flex flex-col items-center justify-center gap-8">
                <Title className="w-full pl-[1rem]">About Me</Title>
                <div className="flex flex-col items-center gap-9 md:flex-row-reverse md:items-end">
                    <Image
                        className="svg-blue w-[15.625rem]"
                        src={Frame}
                        alt="my-image"
                    />
                    <AboutCell />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-8">
                <Title>Let Me Introduce Myself</Title>
                <p className="w-[90%] text-[1.2rem] text-p text-blue">
                    Hello! I'm Yoonje Lee, a passionate programmer with a deep
                    love for technology and innovation. My journey in
                    programming has been an exciting adventure, filled with
                    countless learning experiences and growth.
                    <br />
                    <br />
                    I'm proficient in classic programming languages such as C++,
                    JavaScript, and Go. My interests lie in building
                    cutting-edge web technologies and products, with a
                    particular focus on the exciting field of Blockchain.
                    <br />
                    <br />
                    I also channel my enthusiasm for development into creating
                    products using Node.js, and modern JavaScript libraries and
                    frameworks like React.js and Next.js. Whenever I get the
                    chance, I immerse myself in these technologies to craft
                    robust and scalable solutions.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                    <li>crochet</li>
                    <li>drawing</li>
                    <li>cooking</li>
                </ul>
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
