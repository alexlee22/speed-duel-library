interface TextProps {
  text: string;
  classes?: string;
}

interface HeroProps {
  title: string | TextProps[];
  subtext: string | TextProps[];
}

export default function Hero<HeroProps>({ title, subtext }) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <section className="mx-auto max-w-7xl pr-6 sm:pr-8 lg:pr-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {typeof title === "string"
                  ? title
                  : title.map((textData: TextProps, idx: number) => (
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
              </h1>
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
                    Decklists
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </section>
  );
}
