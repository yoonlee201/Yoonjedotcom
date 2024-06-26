'use client';

import { Title } from '@/app/_components/Title';
import ProjectTab from '@/app/_components/projectPage/ProjectTab';
import { projects } from '@/constants/projects';

const Project = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center gap-3">
            <Title>My Recent Works</Title>
            <ProjectTab projectList={projects} />
        </div>
    );
};

export default Project;
