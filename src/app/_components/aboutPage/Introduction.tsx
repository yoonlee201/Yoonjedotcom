'use client';

import { Title } from '@/app/_components/Title';

const Introduction = () => {
    return (
        <>
            <Title>Let Me Introduce Myself</Title>
            <div className="w-[80%] text-[1.2rem] text-p tracking-wide text-blue md:w-[70%]">
                <p>
                    Hello! I'm Yoonje Lee, a passionate programmer with a
                    profound love for technology and innovation 🚀. My journey
                    in programming has been an exhilarating adventure, filled
                    with countless learning experiences and personal growth 📚.
                    I'm eager to tackle technological challenges and explore new
                    opportunities for learning.
                    <br />
                    <br />
                    I am currently a student at Virginia Tech, pursuing a
                    Bachelor's degree in Computer Science with a minor in
                    Human-Computer Interaction. I am set to graduate with my BS
                    in 2025. Afterward, I plan to continue my education at
                    Virginia Tech by pursuing a Master of Engineering (MEng)
                    degree, focusing on Human-Computer Interaction, and I aim to
                    graduate in 2026 🎓.
                    <br />
                    <br />
                    I am proficient in essential programming languages such as
                    Java and C, which have provided me with a solid foundation
                    in software development 💻. My enthusiasm for development
                    also extends to creating products using Node.js, as well as
                    modern JavaScript libraries and frameworks like React.js and
                    Next.js 🔧.
                    <br />
                    <br />
                    Whenever I get the chance, I immerse myself in these
                    technologies, crafting robust and scalable solutions 💡. My
                    goal is to leverage my skills and creativity to contribute
                    to impactful projects and drive technological advancement.
                    <br />
                    <br />
                    Apart from coding 👩‍💻, some other activities that I love to
                    do!
                </p>
                <ul className="pl-[1.2rem]">
                    <li>🧶 crochet</li>
                    <li>🎨 drawing</li>
                    <li>👩‍🍳 cooking</li>
                </ul>
            </div>
        </>
    );
};

export default Introduction;
