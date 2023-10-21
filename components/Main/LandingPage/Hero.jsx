import Image from "next/image";

const Hero = ({ data, refMostPicked }) => {
  const dataItems = Object.entries(data);

  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-2 w-full max-w-1140 overflow-hidden sm:flex-row sm:px-6 sm:mt-16 sm:justify-between md:px-0">
      <picture data-aos="fade-left" className="sm:order-1 sm:min-w-[520px] ">
        <source
          media="(min-width: 700px)"
          srcSet="/assets/images/hero-desktop.jpg"
        />
        <Image
          src={"/assets/images/hero.jpg"}
          alt="hero image of a destination"
          priority={true}
          width={375}
          height={295}
          className="w-full sm:max-w-[560px] transition-all duration-300"
        />
      </picture>

      <article
        data-aos="fade-right"
        className="px-6 flex flex-col items-center text-center sm:px-0 sm:text-left sm:items-start"
      >
        <h1 className="text-[32px] text-blue-900 font-bold mb-3 sm:w-max sm:text-[42px] sm:mb-4">
          Forget Busy Work, <br /> Start Next Vacation
        </h1>
        <p className="text-gray-400 leading-[1.7em] mb-5 sm:max-w-[335px] sm:mb-8">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <button
          onClick={showMostPicked}
          className="btn px-10 py-2 text-[18px] leading-[1.7em] bg-blue-500 text-white rounded-md mb-10 transition-all duration-300 sm:mb-20 hover:bg-blue-900"
        >
          Show Me Now
        </button>
        <div className="flex gap-3 sm:gap-7">
          {dataItems.map(([title, value]) => (
            <div
              key={title}
              className="flex flex-col gap-3 items-center sm:items-start"
            >
              <Image
                src={`/assets/ic_${title}.svg`}
                alt={title}
                width={32}
                height={32}
              />
              <span className="text-gray-400 font-light leading-[1.7em]">
                <span className="text-blue-900 font-medium">
                  {value.toLocaleString()}
                </span>{" "}
                {title}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Hero;
