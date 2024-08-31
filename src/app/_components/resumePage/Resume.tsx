'use client';

import React from 'react';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import pdf from '~/public/files/Lee_Yoonje_Resume.pdf';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
    const handelDownload = () => {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = 'Lee_Yoonje_Resume.pdf'; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center gap-3">
            <Title>Resume/CV</Title>
            <Button
                size={'md'}
                onClick={handelDownload}
                className="">
                <FontAwesomeIcon icon={faDownload} />
                Download
            </Button>
            <iframe
                src={pdf}
                className="lg:[800px] h-[500px] w-full md:h-[700px]"
            />
        </div>
    );
};

export default Resume;
