import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

// List of menu items with their links and titles
const menuItems = [
  { link: "/", title: "Home" },
  { link: "/browse", title: "Browse By" },
  { link: "/stories", title: "Stories" },
  { link: "/agents", title: "Agents" },
];

const Menu = ({ closeMenu, openMenu, desktop }) => {
  // Using the usePathname hook from Next.js to get the current pathname from the URL
  const pathname = usePathname();

  // Determining the CSS class for the ul element (menu list) based on the desktop and openMenu conditions
  const ulClassName = desktop
    ? "menuDesktop"
    : openMenu
    ? "menuOpenMobile"
    : "hideMenu";

  return (
    <ul className={ulClassName}>
      {/* Using a map loop to create MenuItem elements based on menuItems */}
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          item={item}
          pathname={pathname}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};

export default Menu;
