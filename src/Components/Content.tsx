interface TextProps {
  text: string;
  classes?: string;
}

interface ContentProps {
  heading: string | TextProps[];
  subtext: string | TextProps[];
  reverse?: boolean;
}

export default function Content<ContentProps>({ heading, subtext, reverse }) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl-gap:16 sm:pb-16 md:pb-20 lg:w-full lg:py-28 xl:py-32">
          <div
            className={`lg:py-28 xl:py-32 ${
              reverse && "col-start-2 row-start-1"
            }`}
          >
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              {heading}
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {typeof subtext === "string"
                ? subtext
                : subtext.map((textData: TextProps, idx: number) => (
                    <span
                      key={idx}
                      className={`
                        block
                        xl:inline 
                        ${textData.classes}
                      `}
                    >
                      {textData.text}
                    </span>
                  ))}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 md:py-4 md:text-lg md:px-10"
                >
                  Learn to Play
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full lg:rounded-md"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
