'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronUp,
    faChevronDown,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Node from '~/public/devicons/nodejs.svg';

import { skills } from '~/src/constants/skills';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';

interface ProjectDescriptionProps {
    title: string;
    projectImage: StaticImageData | null;
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-3">
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
                        key={index}
                        title={title}
                        projectImage={projectImage}
                        skillList={skillList}
                        description={description}
                        githubLink={githubLink}
                        demoLink={demoLink}
                    />
                )
            )}
        </div>
    );
};

const ProjectDescription = ({
    title,
    projectImage,
    skillList,
    description,
    githubLink,
    demoLink,
}: ProjectDescriptionProps) => {
    const [readMore, setReadMore] = useState<boolean>(false);
    return (
        <div className="mt-3 flex flex-col items-center rounded-lg border-4 border-blue p-5 sm:w-[80%] sm:flex-row">
            <div className="relative h-[12.897rem] w-full sm:min-w-[13rem] md:min-w-[15.625rem]">
                <Image
                    className="rounded-md border-sm border-blue object-cover"
                    src={projectImage ?? '/images/programming-screen.jpg'}
                    alt="Programming code on a computer screen"
                    fill
                    sizes="15.625rem"
                />
            </div>
            <hgroup className="flex flex-col justify-between gap-1 pt-[1rem] sm:pl-[1.3rem] md:pt-0">
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
                    <div className="mr-auto flex gap-2">
                        {githubLink && (
                            <Link href={githubLink}>
                                <Button>
                                    <FontAwesomeIcon icon={faGithub} />
                                    Github
                                </Button>
                            </Link>
                        )}
                        {demoLink && (
                            <Link href={demoLink}>
                                <Button>
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                    Demo
                                </Button>
                            </Link>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            setReadMore(!readMore);
                        }}
                        className="flex items-center justify-end gap-1 text-blue underline underline-offset-2 hover:text-red">
                        <p className="xs:block block hidden text-[0.8rem] sm:hidden md:block">
                            read {readMore ? 'less' : 'more'}
                        </p>
                        <FontAwesomeIcon
                            className="w-[10%]"
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
