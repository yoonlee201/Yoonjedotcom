'use client';

import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';
import Download from '~/public/download.svg';
import Image from 'next/image';
import { PDFViewer } from '@react-pdf/renderer';


const Resume = () => {
    const handelDownload = () => {
        // const pdfUrl = './Lee_Yoonje_Resume.pdf';
        // const link = document.createElement('a');
        // link.href = pdfUrl;
        // link.download = 'Lee_Yoonje_Resume.pdf'; // specify the filename
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        fetch(
            'https://utfs.io/f/246d8b69-60a0-416e-821e-a637a97d6c9d-uo748n.pdf'
        ).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Lee_Yoonje_Resume.pdf';
                alink.click();
            });
        });
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
        </div>
    );
};

export default Resume;
