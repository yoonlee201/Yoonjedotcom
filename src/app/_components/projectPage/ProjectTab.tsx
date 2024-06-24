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
    return (
        <>
            {projectList.map(({ projectImage, skillList, description }) => {
                <div className="flex flex-col rounded-lg border-4 border-blue p-5 md:w-[80%] md:flex-row">
                    <div className="relative h-[12.897rem] w-[100%] md:h-[12.897rem] md:w-[15.625rem]">
                        <Image
                            //  Photo by luis gomes:
                            // https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/
                            className="rounded-md object-cover"
                            src={projectImage ?? '/programming-screen.jpg'}
                            alt="Programming code on a computer screen"
                            fill
                            sizes="15.625rem"
                        />
                    </div>
                    <div className="flex flex-col gap-1 md:pl-[1rem]">
                        <Title size={'h2'}>Project Title</Title>
                        <div className="flex flex-wrap gap-1">
                            {skillList.map(s => (
                                <SkillCapsule skill={s} />
                            ))}
                        </div>
                        <p>{description}</p>
                    </div>
                </div>;
            })}
        </>
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
