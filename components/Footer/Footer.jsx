import Link from "next/link";
import Brand from "../Brand";
import FooterSection from "./FooterSection";
import footerLinks from "./footerLinks";

const Footer = () => {
  return (
    <footer className="flex place-content-center">
      <div className="flex flex-col gap-12 py-12 w-full max-w-1140 px-6 md:px-0">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <Brand />
            <p className="text-gray-400 font-light max-w-xs">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>

          <div className="flex gap-16">
            {footerLinks.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 font-light">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
