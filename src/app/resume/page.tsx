import Resume from "@/app/_components/resumePage/Resume";

export const route = '/resume';

const Page = () => {
    return (
        <main className="mb-[0rem] lg:mb-0">
            <section className="flex justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <Resume/>
            </section>
        </main>
    );
};

export default Page;
