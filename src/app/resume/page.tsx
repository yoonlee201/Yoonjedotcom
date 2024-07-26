import Resume from "@/app/_components/resumePage/Resume";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Check my resume'
};

export default async function Page() {
    return (
        <section className="flex justify-center">
            <Resume />
        </section>
    );
};

