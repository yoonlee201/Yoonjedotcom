'use client'
import AboutCell from "@/app/_components/aboutPage/AboutCell";
import Skillset from "@/app/_components/aboutPage/Skillset";

const About = () => {
  return (
    <main className="lg:mb-0 mb-[0rem]">
        <section className="w-full h-full flex justify-center lg:pt-root-top pt-root-top-md pb-0 lg:pb-[3.5rem] overflow-y-auto">
            <div className="m-4 min-w-[90vw] lg:min-w-[65vw] max-h-[calc(100vh-18rem)] lg:min-h-[43rem] border-2 ">
                <h1 className="text-h1 text-blue text-krona-one pt-[6rem] pl-[1rem]">About Me</h1>
                <div className="max-w-[27rem] pt-4">
                    <AboutCell />
				</div>
				<Skillset />
			</div>
        </section>
    </main>
  );
}

export default About;