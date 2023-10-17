import Brand from "../Brand";
import FooterSection from "./FooterSection";
import footerLinks from "./footerLinks";

const Footer = () => {
  return (
    <footer data-aos="fade" className="flex place-content-center">
      <div className="flex flex-col gap-12 py-12 w-full max-w-1140 px-6 md:px-0">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-0 md:justify-between">
          <div className="flex flex-col gap-4 text-center md:text-left md:gap-6">
            <Brand />
            <p className="text-gray-400 font-light max-w-xs">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center sm:text-left sm:flex-row sm:gap-16">
            {footerLinks.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 font-light transition-all duration-300">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
