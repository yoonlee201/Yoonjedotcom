'use client';

import { Title } from '@/app/_components/Title';
import ProjectTab from '@/app/_components/projectPage/ProjectTab';

const Project = () => {
    const data = [
        {
            projectImage: null,
            skillList: ['typescript', 'next.js', 'mongodb'],
            description: 'Hi',
            githubLink: 'https://react-icons.github.io/react-icons/icons/di/',
            demoLink: null,
        },
        {
            projectImage: null,
            skillList: ['typescript', 'next.js', 'mongodb'],
            description: 'Hi',
            githubLink: null,
            demoLink: 'https://react-icons.github.io/react-icons/icons/di/',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'next.js', 'mongodb'],
            description: 'Hi',
            githubLink: 'https://react-icons.github.io/react-icons/icons/di/',
            demoLink: 'https://react-icons.github.io/react-icons/icons/di/',
        },
    ];
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center gap-3">
            <Title>My Recent Works</Title>
            <ProjectTab projectList={data} />
        </div>
    );
};

export default Project;
