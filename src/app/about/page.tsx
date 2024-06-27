import About from '@/app/_components/aboutPage/About';
import { Metadata } from 'next';

// export const route = '/about';

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Learn more about Yoonje Lee',
};

export default async function Page() {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <About />
            </section>
        </main>
    );
};
