"use client";

import { usePathname } from "next/navigation";
import Brand from "../Brand";
import { useState } from "react";
import MobileMenuIcons from "./MobileMenuIcons";
import MenuItem from "./MenuItem";
import { useMenuEffects } from "@/hooks/useMenuEffects";

const menuItems = [
  { link: "/", title: "Home" },
  { link: "/browse", title: "Browse By" },
  { link: "/stories", title: "Stories" },
  { link: "/agents", title: "Agents" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 640);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useMenuEffects(isMenuOpen, setIsMenuOpen, 640, setIsDesktop);

  return (
    <nav className="flex place-content-center border-b border-gray-200">
      <div className="flex w-full max-w-1140 items-center justify-between py-5 px-6 md:px-0">
        <Brand />

        <MobileMenuIcons isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

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
            <MenuItem
              key={index}
              item={item}
              pathname={pathname}
              closeMenu={closeMenu}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
