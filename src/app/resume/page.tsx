import Resume from "@/app/_components/resumePage/Resume";
import { Metadata } from 'next';

// export const route = '/resume';
export const metadata: Metadata = {
    title: 'Resume',
    description: 'Check my resume',
    icons: {
        icon: '~/public/images/favicon.ico',
    },
};

export default async function Page() {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <Resume />
            </section>
        </main>
    );
};

