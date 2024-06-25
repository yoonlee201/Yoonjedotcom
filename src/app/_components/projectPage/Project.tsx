'use client';

import { Title } from '@/app/_components/Title';
import ProjectTab from '@/app/_components/projectPage/ProjectTab';

const Project = () => {
    const data = [
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
        {
            projectImage: null,
            skillList: ['typescript', 'nextjs', 'mongodb'],
            description: 'Hi',
        },
    ];
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center">
            <Title>My Recent Works</Title>
            <ProjectTab projectList={data} />
        </div>
    );
};

export default Project;
