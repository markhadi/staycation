import Link from "next/link";
import Brand from "../Brand";

const footerLinks = [
  {
    title: "For Beginners",
    links: ["New Account", "Start Booking a Room", "Use Payments"],
  },
  {
    title: "Explore Us",
    links: ["Our Careers", "Privacy", "Terms & Conditions"],
  },
  {
    title: "Connect Us",
    links: [
      "support@staycation.id",
      "021 - 2208 - 1996",
      "Staycation, Kemang, Jakarta",
    ],
  },
];

const FooterSection = ({ title, links }) => (
  <div>
    <strong>{title}</strong>
    <div>
      {links.map((link, index) => (
        <div key={index}>
          {link.includes("@") ? (
            <Link href={`mailto:${link}`}>{link}</Link>
          ) : (
            <Link href={"/"}>{link}</Link>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex place-content-center">
      <div className="flex flex-col gap-12 py-12 w-full max-w-1140">
        <div>
          <div className="flex flex-col gap-6">
            <Brand />
            <p>
              We kaboom your beauty holiday <br />
              instantly and memorable.
            </p>
          </div>

          <div>
            {footerLinks.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <p className="text-center">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
