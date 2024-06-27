import Name from '@/app/_components/homePage/Name';
import { Title } from './_components/Title';

export const route = '/';

const Page = () => {
    return (
        <main className="relative h-screen overflow-hidden">
            <Name />
            <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full justify-center overflow-y-auto pb-0 pt-root-top-md lg:pb-[3.5rem] lg:pt-root-top">
                <div className="m-4 min-h-[47rem] min-w-[90vw] rounded-xl border-lg border-blue lg:max-h-[calc(100vh-18rem)] lg:min-h-[43rem] lg:min-w-[65vw]">
                    <header className="text-krona-one text-h1 text-blue">
                        <h1 className="flex text-end">
                            Hi There!
                            <br />
                            I'm
                        </h1>
                        <h1>Software Engineer</h1>
                    </header>
                </div>
            </div>
        </main>
    );
};

export default Page;
