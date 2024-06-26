'use client';

import React, { useEffect, useState } from 'react';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import Download from '~/public/download.svg';
import Image from 'next/image';
import Link from 'next/link';
import pdf from '@/assets/Lee_Yoonje_Resume.pdf';

const Resume = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[60rem] flex-col items-center justify-center gap-3">
            <Title>Resume/CV</Title>
            <Link
                href={pdf}
                download={'Lee_Yoonje_Resume.pdf'}>
                <Button
                    size={'md'}
                    className="">
                    <Image
                        src={Download}
                        alt="Download"
                        className={`svg-beige h-[110%] w-[110%]`}
                    />
                    Download
                </Button>
            </Link>
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
