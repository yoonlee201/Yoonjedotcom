import Project from "@/app/_components/projectPage/Project";
import { Metadata } from 'next';

// export const route = '/project';
export const metadata: Metadata = {
    title: 'Project',
    description: 'Checkout my projects!',
    icons: {
        icon: '/images/favicon.ico',
    },
};

export default async function Page() {
    return (
        <section className="flex justify-center">
                <Project />
        </section>
    );
};

