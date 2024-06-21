
export const route = '/about';

const About = () => {
  return (
    <main className="lg:mb-0 mb-[0rem]">
        <section className="w-full h-full flex justify-center lg:pt-root-top pt-root-top-md pb-0 lg:pb-[3.5rem] overflow-y-auto">
            <div className="m-4 min-w-[90vw] lg:min-w-[65vw] lg:max-h-[calc(100vh-18rem)] lg:min-h-[43rem] min-h-[47rem] ">
                <h1 className="text-h1 text-blue text-krona-one pt-[6rem] pl-[1rem]">About Me</h1>
                <div className="max-w-[27rem] pt-4">
                    <AboutCell />
                </div>
            </div>
        </section>
    </main>
  );
}

export default About;

const AboutCell = () => {
    const introduction = [
        { h3: 'Name',  p: 'Yoonje Lee'},
        { h3: 'Age',  p: '21'},
        { h3: 'College',  p: 'Virginia Tech'},
        { h3: 'Major',  p: 'BS in Computer Science'},
        { h3: 'Hometown',  p: 'Seoul Korea'},
    ]
    return (
        <>
            {introduction.map(({h3, p}, i) => (
                <div key={i} className="flex h-[4rem] items-center justify-start pl-[1.75rem] text-blue gap-2 border-b-md border-blue">
                    <h3 className="text-h3">{h3}:</h3>
                    <p className="text-p">{p}</p>
                </div>
            ))
            }
        </>
    )
}
