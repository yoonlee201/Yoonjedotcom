import Project from "@/app/_components/projectPage/Project";
import { Metadata } from 'next';

// export const route = '/project';
export const metadata: Metadata = {
    title: 'Project Page',
    description: 'Checkout my projects!',
};

export default async function Page() {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <Project />
            </section>
        </main>
    );
};

