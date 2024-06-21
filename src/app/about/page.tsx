import About from "@/app/_components/aboutPage/About";

export const route = '/about';

const Page = () => {
  return (
    <main className="lg:mb-0 mb-[0rem]">
        <section className="w-full h-full flex justify-center lg:pt-root-top pt-root-top-md pb-0 lg:pb-[3.5rem] overflow-y-auto">
            <div className="m-4 min-w-[90vw] lg:min-w-[65vw] lg:max-h-[calc(100vh-18rem)] lg:min-h-[43rem] min-h-[47rem] ">
                <About />
            </div>
        </section>
    </main>
  );
}

export default Page;

