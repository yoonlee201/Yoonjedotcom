
export const route = '/';

const Page = () => {
  return (
    <main className="lg:mb-0 mb-[0rem]">
      <section className="w-full h-full flex justify-center lg:pt-root-top pt-root-top-md pb-0 lg:pb-[3.5rem] overflow-y-auto">
        <div className="border-lg border-blue rounded-xl m-4 
                      min-w-[90vw] lg:min-w-[65vw] lg:max-h-[calc(100vh-18rem)] lg:min-h-[43rem] min-h-[47rem] ">
				  <header className="text-h1 text-blue text-krona-one">
					  <h1 className="flex text-end">Hi There!<br/>I'm</h1>
					  <h1 >Software Engineer</h1>
				</header>
        </div>
      </section>
    </main>
  );
}

export default Page
