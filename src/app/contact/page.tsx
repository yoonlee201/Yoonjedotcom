import Contact from "@/app/_components/contactPage/Contact";
import { Metadata } from 'next';

// export const route = '/contactme';
export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact me!',
};

export default async function Page() {
    return (
        <section className="flex justify-center">
                <Contact />
        </section>
    );
}; 
