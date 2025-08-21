'use client';

import { Title } from '@/app/_components/Title';

const Introduction = () => {
    return (
        <>
            <Title>Let Me Introduce Myself</Title>
            <div className="w-[80%] text-[1.2rem] text-p tracking-wide text-blue md:w-[70%]">
                <p>

                    Hello! I'm Yoonje Lee, a passionate programmer with a deep love for technology, 
                    innovation, and creating meaningful user experiences 🚀. My journey in programming 
                    has been an exciting adventure, filled with continuous learning, growth, 
                    and opportunities to bring ideas to life 📚. I thrive on tackling challenges, 
                    exploring new technologies, and building impactful solutions.

                    <br />

                    I graduated with a Bachelor's degree in Computer Science with a minor in Human-Computer Interaction at Virginia Tech in 2025 🎓,
                    and I am currently pursuing a Master of Engineering in Computer Science and Applications , focusing on Data Analytics 
                    and Artificial Intelligence, with an expected graduation in 2026.

                    <br />

                    My technical foundation is built on languages like C/C++ 
                    and Java, which I've strengthened through both coursework and teaching assistant roles. 
                    Beyond that, I have hands-on experience with modern web technologies, including 
                    React.js, Next.js, Node.js, and TypeScript, as well as database systems like PostgreSQL, MySQL, and MongoDB.

                    <br />

                    I recently worked as a Software Engineer Intern at Versy (Versy Talks), where I:

                    Engineered a real-time notification and upvote system that increased user debate participation by 75%

                    Revamped the blog UI/UX with Next.js + Tailwind CSS, boosting average post views by 58%

                    Developed a secure, automated password reset flow with Prisma and PostgreSQL, reducing manual reset requests

                    <br />
                    <br />

                    Beyond internships, I've built impactful projects, such as:

                    Diary Quest 📝 - A web platform helping students reflect on experiences with AI-driven insights and collaborative tools

                    RewardBot 🎮 - A gamified student reward system integrated with the Canvas API to boost assignment completion

                    Interactive Data Visualization Tool 📊 - A platform with real-time editing and brushing/linking techniques for deeper data exploration

                    <br />
                    <br />

                    When I’m not coding 👨‍💻, I enjoy exploring human-centered design, 
                    experimenting with new visualization techniques, and finding creative 
                    ways to merge HCI principles with robust engineering. My ultimate goal is to use 
                    my skills to create engaging, user-driven technologies that inspire and empower people.
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
