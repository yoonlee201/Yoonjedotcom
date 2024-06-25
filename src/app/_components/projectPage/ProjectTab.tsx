'use client';

import Image from 'next/image';
import Node from '~/public/devicons/nodejs.svg';
import { skills } from '~/src/constants/skills';
import { Title } from '@/app/_components/Title';

interface ProjectTabProps {
    projectList: {
        projectImage: string | null;
        skillList: string[];
        description: string;
    }[];
}

const ProjectTab = ({ projectList }: ProjectTabProps) => {
    if (!projectList || projectList.length === 0) {
        return <div>No projects to display</div>;
    }
    
    return (
        <section className='flex flex-col w-full h-full items-center jusitfy-center gap-3'>
            {projectList.map(
                ({ projectImage, skillList, description }, index) => (
                    <div
                        key={index}
                        className="mt-3 flex flex-col rounded-lg border-4 border-blue p-5 sm:w-[80%] sm:flex-row">
                        <div className="relative h-[12.897rem] w-[100%] sm:h-[12.897rem] sm:w-[15.625rem]">
                            <Image
                                className="rounded-md object-cover"
                                src={projectImage ?? '/programming-screen.jpg'}
                                alt="Programming code on a computer screen"
                                fill
                                sizes="15.625rem"
                            />
                        </div>
                        <div className="flex flex-col gap-1 sm:pl-[1.3rem]">
                            <Title size={'h2'}>Project Title</Title>
                            <div className="flex flex-wrap gap-1">
                                {skillList.map((s, skillIndex) => (
                                    <SkillCapsule
                                        key={skillIndex}
                                        skill={s}
                                    />
                                ))}
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                )
            )}
        </section>
    );
};

const SkillCapsule = ({ skill }: { skill: string }) => {
    return (
        <div className="inline-flex items-center gap-1 rounded-full bg-beige-2 p-[0.15rem] px-2 text-[0.55rem] text-blue">
            <div className="flex h-[0.7rem] w-[0.7rem] items-center">
                <Image
                    src={
                        skills.find(({ name }) => name === skill)?.icon ?? Node
                    }
                    alt={skill}
                    width={10}
                    height={10}
                />
            </div>
            <p>{skill}</p>
        </div>
    );
};

export default ProjectTab;
