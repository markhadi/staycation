"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Brand from "./Brand";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const menuItems = [
  { link: "/", title: "Home" },
  { link: "/browse", title: "Browse By" },
  { link: "/stories", title: "Stories" },
  { link: "/agents", title: "Agents" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(".menuOpenMobile")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex place-content-center border-b border-gray-200">
      <div className="flex w-full max-w-1140 items-center justify-between py-5 px-6 md:px-0">
        <Brand />

        <div className="flex items-center">
          <Image
            src={"/assets/hamburger-icon.svg"}
            alt="hamburger icon"
            width={24}
            height={24}
            className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0 absolute" : "opacity-100 static"
            }`}
            onClick={toggleMenu}
          />

          <Image
            src={"/assets/close-icon.svg"}
            alt="close icon"
            width={24}
            height={24}
            className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100 static" : "opacity-0 absolute"
            }`}
            onClick={toggleMenu}
          />
        </div>

        <ul
          className={` ${
            isDesktop
              ? "menuDesktop"
              : isMenuOpen
              ? "menuOpenMobile"
              : "hideMenu"
          } `}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? "text-blue-500" : "text-blue-900"
                } hover:text-blue-500 transition-all duration-300`}
                onClick={closeMenu}
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
