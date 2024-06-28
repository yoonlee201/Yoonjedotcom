import Contact from "@/app/_components/contactPage/Contact";
import { Metadata } from 'next';

// export const route = '/contactme';
export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact me!',
};

export default async function Page() {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <Contact />
            </section>
        </main>
    );
}; 
