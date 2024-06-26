'use client';

import React, { useEffect, useState } from 'react';
import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import Download from '~/public/download.svg';
import Image from 'next/image';
import Link from 'next/link';
import pdf from '@/assets/Lee_Yoonje_Resume.pdf'

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

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
        </div>
    );
};

export default Resume;
