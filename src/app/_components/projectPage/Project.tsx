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
    ];
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center border-2">
            <Title>My Recent Works</Title>
            Why 
            <ProjectTab projectList={data} />
            Why
        </div>
    );
};

export default Project;
