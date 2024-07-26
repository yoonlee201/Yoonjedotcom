import Name from '@/app/_components/homePage/Name';
import { Title } from '@/app/_components/Title';

export default function Page() {
    return (
        <section className="relative min-h-[calc(100vh-3.75rem-8.7rem)] overflow-hidden md:min-h-[calc(100vh-4.3rem-4.3rem)] lg:min-h-[calc(100vh-4.7rem-4.7rem)]">
            <div className="absolute inset-0">
                <Name />
            </div>
            <div
                className={`scrollbar-hide pointer-events-none relative z-10 flex h-[calc(100vh-13rem)] w-full justify-center overflow-y-auto md:h-[calc(100vh-9rem)] lg:h-[calc(100vh-10rem)]`}>
                <div className="m-4 min-w-[90vw] rounded-lg border-lg border-blue lg:min-w-[65vw]">
                    <header className="h-full w-full">
                        <div className="flex pl-[2rem] md:pt-[2rem] text-end">
                            <Title className="flex text-end">
                                Hi There!
                                <br />
                                I'm
                            </Title>
                        </div>
                    </header>
                </div>
            </div>
        </section>
    );
}
