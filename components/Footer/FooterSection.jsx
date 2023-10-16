import Link from "next/link";

const FooterSection = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <strong className="text-[18px] text-blue-900 font-medium">{title}</strong>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={"/"}
            className="text-gray-400 font-light transition-all duration-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
