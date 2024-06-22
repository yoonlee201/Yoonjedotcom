import About from '@/app/_components/aboutPage/About';

export const route = '/about';

const Page = () => {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex h-full w-full justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <About />
            </section>
        </main>
    );
};

export default Page;
