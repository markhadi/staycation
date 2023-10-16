import { useEffect } from "react";

export function useMenuEffects(
  isMenuOpen,
  setIsMenuOpen,
  breakpoint,
  setIsDesktop
) {
  useEffect(() => {
    const checkIsDesktop = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth > breakpoint);
      }
    };

    checkIsDesktop();

    const handleResize = () => {
      setIsMenuOpen(false);
      setIsDesktop(window.innerWidth > breakpoint);
    };

    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(".menuOpenMobile")) {
        setIsMenuOpen(false);
      }
    };

    const handleWindowClick = (e) => {
      closeMenuOnOutsideClick(e);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleWindowClick);
    };
  }, [breakpoint, isMenuOpen, setIsDesktop]);
}
