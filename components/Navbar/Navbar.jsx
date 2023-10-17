"use client";

import Brand from "../Brand";
import { useEffect, useState } from "react";
import MobileMenuIcons from "./MobileMenuIcons";
import { useMenuEffects } from "@/hooks/useMenuEffects";
import Menu from "./Menu";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useMenuEffects(isMenuOpen, setIsMenuOpen, 640, setIsDesktop);

  useEffect(() => {
    AOS.init({ duration: 500, easing: "ease-in-out" });
  }, []);

  return (
    <nav
      data-aos="fade"
      className="flex place-content-center border-b border-gray-200"
    >
      <div className="flex w-full max-w-1140 items-center justify-between py-5 px-6 md:px-0">
        <Brand />
        <MobileMenuIcons isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Menu closeMenu={closeMenu} openMenu={isMenuOpen} desktop={isDesktop} />
      </div>
    </nav>
  );
};

export default Navbar;
