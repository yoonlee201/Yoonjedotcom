'use client';

import Image from 'next/image';
import Node from '~/public/devicons/nodejs.svg';
import { skills } from '~/src/constants/skills';
import { Title } from '@/app/_components/Title';
import Link from 'next/link';
import Github from '~/public/github.svg';
import Demo from '~/public/demo.svg';

interface ProjectTabProps {
    projectList: {
        projectImage: string | null;
        skillList: string[];
        description: string;
        githubLink: string | null;
        demoLink: string | null;
    }[];
}

const ProjectTab = ({ projectList }: ProjectTabProps) => {
    if (!projectList || projectList.length === 0) {
        return <div>No projects to display</div>;
    }

    return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-3">
            {projectList.map(
                (
                    {
                        projectImage,
                        skillList,
                        description,
                        githubLink,
                        demoLink,
                    },
                    index
                ) => (
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
                        <hgroup className="inline-flex flex-col justify-between gap-1 sm:pl-[1.3rem]">
                            <header className="flex flex-col gap-1">
                                <Title size={'h2'}>Project Title</Title>
                                <ul className="flex flex-wrap gap-1">
                                    {skillList.map((s, skillIndex) => (
                                        <SkillCapsule
                                            key={skillIndex}
                                            skill={s}
                                        />
                                    ))}
                                </ul>
                                <p className="pt-[0.5rem] text-[0.8rem] text-p text-blue-2">
                                    {description}
                                </p>
                            </header>
                            <div className="inline-flex gap-2">
                                {githubLink && (
                                    <Link
                                        href={githubLink}
                                        className="flex h-[1.5rem] items-center gap-1 rounded-sm bg-blue p-1 text-[0.8rem] text-p text-beige">
                                        <Image
                                            src={Github}
                                            alt="Github"
                                            className={`svg-beige h-[90%] w-[90%]`}
                                        />
                                        Github
                                    </Link>
                                )}
                                {demoLink && (
                                    <Link
                                        href={demoLink}
                                        className="flex h-[1.5rem] items-center gap-1 rounded-sm bg-blue p-1 text-[0.8rem] text-p text-beige">
                                        <Image
                                            src={Demo}
                                            alt="Github"
                                            className={`svg-beige h-[90%] w-[90%]`}
                                        />
                                        Demo
                                    </Link>
                                )}
                            </div>
                        </hgroup>
                    </div>
                )
            )}
        </section>
    );
};

const SkillCapsule = ({ skill }: { skill: string }) => {
    return (
        <li className="inline-flex items-center gap-1 rounded-full bg-beige-2 p-[0.15rem] px-2 text-[0.55rem] text-blue">
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
        </li>
    );
};

export default ProjectTab;
