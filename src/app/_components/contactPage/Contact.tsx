'use client';

import { Title } from '@/app/_components/Title';
import { Button } from '@/app/_components/Button';

const Contact = () => {
    return (
        <div className="m-4 flex w-[90vw] max-w-[35rem] flex-col items-center justify-center">
            <Title>Contact Me</Title>
            <form className="w-full pt-[2rem]">
                <fieldset className="inline-flex w-full flex-col gap-3">
                    <Input
                        type="text"
                        size="small"
                        label="Name"
                    />
                    <Input
                        type="email"
                        size="small"
                        label="Email"
                    />
                    <Input
                        type="text"
                        size="small"
                        label="Subject"
                    />
                    <Input
                        type="text"
                        size="large"
                        label="Message"
                    />
                    <Button size={'lg'}>Send Message</Button>
                </fieldset>
            </form>
        </div>
    );
};

interface InputProps {
    label?: string;
    type: string;
    size: 'large' | 'small';
}

const Input = ({ label, type, size }: InputProps) => {
    return (
        <label className="w-full">
            <input
                type={type}
                placeholder={label}
                className={`${size === 'large' ? 'h-[18rem]' : 'h-[4rem]'} w-full rounded-sm border-2 border-beige-3 bg-beige-2 p-5 text-blue-2 placeholder:text-p placeholder:text-blue`}
                required
                
            />
        </label>
    );
};

export default Contact;
