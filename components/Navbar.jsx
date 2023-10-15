"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { link: "/", title: "Home" },
  { link: "/browse", title: "Browse By" },
  { link: "/stories", title: "Stories" },
  { link: "/agents", title: "Agents" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex place-content-center border-b border-gray-200">
      <div className="flex w-full max-w-1140 items-center justify-between py-5">
        <Link href={"/"} className="text-blue-500 font-medium text-[26px]">
          Stay<span className="text-blue-900">cation.</span>
        </Link>

        <ul className="flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? "text-blue-500" : "text-blue-900"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
