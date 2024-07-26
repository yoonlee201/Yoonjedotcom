'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Demo from '~/public/icons/demo.svg';
import Github from '~/public/icons/github.svg';
import Node from '~/public/devicons/nodejs.svg';

import { skills } from '~/src/constants/skills';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';

interface ProjectDescriptionProps {
    title: string;
    projectImage: string | null;
    skillList: string[];
    description: string;
    githubLink: string | null;
    demoLink: string | null;
}

interface ProjectTabProps {
    projectList: ProjectDescriptionProps[];
}

const ProjectTab = ({ projectList }: ProjectTabProps) => {
    if (!projectList || projectList.length === 0) {
        return <p className="text-h3 text-blue">No projects to display</p>;
    }

    return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-3">
            {projectList.map(
                (
                    {
                        title,
                        projectImage,
                        skillList,
                        description,
                        githubLink,
                        demoLink,
                    },
                    index
                ) => (
                    <ProjectDescription
                        title={title}
                        projectImage={projectImage}
                        skillList={skillList}
                        description={description}
                        githubLink={githubLink}
                        demoLink={demoLink}
                        index={index}
                    />
                )
            )}
        </section>
    );
};

const ProjectDescription = ({
    title,
    projectImage,
    skillList,
    description,
    githubLink,
    demoLink,
    index,
}: ProjectDescriptionProps & { index: number }) => {
    const [readMore, setReadMore] = useState<boolean>(false);
    return (
        <div
            key={index}
            className="mt-3 flex flex-col items-center rounded-lg border-4 border-blue p-5 sm:w-[80%] sm:flex-row">
            <div className="relative h-[12.897rem] w-[100%] sm:min-w-[15.625rem]">
                <Image
                    className="rounded-md border-sm border-blue"
                    src={projectImage ?? '/images/programming-screen.jpg'}
                    alt="Programming code on a computer screen"
                    fill
                    sizes="15.625rem"
                />
            </div>
            <hgroup className="inline-flex flex-col justify-between gap-1 sm:pl-[1.3rem]">
                <header className="flex flex-col gap-1">
                    <Title size={'h2'}>{title}</Title>
                    <ul className="flex flex-wrap gap-1">
                        {skillList.map((s, skillIndex) => (
                            <SkillCapsule
                                key={skillIndex}
                                skill={s}
                            />
                        ))}
                    </ul>
                    <p
                        className={`${!readMore && 'line-clamp-5'} pt-[0.5rem] text-[0.8rem] text-p text-blue-2`}>
                        {description}
                    </p>
                </header>
                <div className="flex items-center justify-between text-center">
                    <div className="inline-flex gap-2">
                        {githubLink && (
                            <Link href={githubLink}>
                                <Button>
                                    <Image
                                        src={Github}
                                        alt="Github"
                                        className={`svg-beige h-[90%] w-[90%]`}
                                    />
                                    Github
                                </Button>
                            </Link>
                        )}
                        {demoLink && (
                            <Link href={demoLink}>
                                <Button>
                                    <Image
                                        src={Demo}
                                        alt="Github"
                                        className={`svg-beige h-[90%] w-[90%]`}
                                    />
                                    Demo
                                </Button>
                            </Link>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            setReadMore(!readMore);
                        }}
                        className="text-p text-blue underline underline-offset-2 hover:text-red">
                        read {readMore ? 'less' : 'more'}{' '}
                        <FontAwesomeIcon
                            size="2xs"
                            icon={readMore ? faChevronUp : faChevronDown}
                        />
                    </button>
                </div>
            </hgroup>
        </div>
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
