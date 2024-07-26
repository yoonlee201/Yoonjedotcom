import About from '@/app/_components/aboutPage/About';
import { Metadata } from 'next';

// export const route = '/about';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Yoonje Lee',
};

export default async function Page() {
    return (
        <section className="flex justify-center">
                <About />
        </section>
    );
};
