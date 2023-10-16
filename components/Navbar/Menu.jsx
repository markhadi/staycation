import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

const menuItems = [
  { link: "/", title: "Home" },
  { link: "/browse", title: "Browse By" },
  { link: "/stories", title: "Stories" },
  { link: "/agents", title: "Agents" },
];

const Menu = ({ closeMenu, openMenu, desktop }) => {
  const pathname = usePathname();

  return (
    <ul
      className={` ${
        desktop ? "menuDesktop" : openMenu ? "menuOpenMobile" : "hideMenu"
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
  );
};

export default Menu;
