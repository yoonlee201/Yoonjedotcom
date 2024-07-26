'use client';

import React from 'react';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import Download from '~/public/icons/download.svg';
import Image from 'next/image';
import pdf from '~/public/files/Lee_Yoonje_Resume.pdf';

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
                <Image
                    src={Download}
                    alt="Download"
                    className={`svg-beige h-[110%] w-[110%]`}
                />
                Download
            </Button>
            <iframe
                src={
                    'https://utfs.io/f/246d8b69-60a0-416e-821e-a637a97d6c9d-uo748n.pdf#toolbar=0'
                }
                className="lg:[800px] h-[500px] w-full md:h-[700px]"
            />
        </div>
    );
};

export default Resume;
