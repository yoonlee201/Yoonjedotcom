import Contact from "@/app/_components/contactPage/Contact";

export const route = '/contactme';

const Page = () => {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <Contact/>
            </section>
        </main>
    );
}; 

export default Page;
