import Image from "next/image";

const MobileMenuIcons = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="flex items-center">
      {/* Hamburger Icon */}
      <Image
        src={"/assets/hamburger-icon.svg"}
        alt="hamburger icon"
        width={24}
        height={24}
        // Conditionally set the opacity and positioning of the hamburger icon based on the 'isMenuOpen' prop
        className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
          isMenuOpen ? "opacity-0 absolute" : "opacity-100 static"
        }`}
        // Call the 'toggleMenu' function when the hamburger icon is clicked
        onClick={toggleMenu}
      />

      {/* Close Icon */}
      <Image
        src={"/assets/close-icon.svg"}
        alt="close icon"
        width={24}
        height={24}
        // Conditionally set the opacity and positioning of the close icon based on the 'isMenuOpen' prop
        className={`sm:hidden cursor-pointer transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 static" : "opacity-0 absolute"
        }`}
        // Call the 'toggleMenu' function when the close icon is clicked
        onClick={toggleMenu}
      />
    </div>
  );
};

export default MobileMenuIcons;
