import Link from "next/link";

const MenuItem = ({ item, pathname, closeMenu }) => {
  return (
    <li>
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
  );
};

export default MenuItem;
