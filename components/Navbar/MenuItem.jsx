import Link from "next/link";

const MenuItem = ({ item, pathname, closeMenu }) => {
  return (
    <li>
      <Link
        href={item.link}
        // Dynamically set the text color based on whether the current pathname matches the item's link
        className={`${
          pathname === item.link ? "text-blue-500" : "text-blue-900"
        } hover:text-blue-500 transition-all duration-300`}
        // Call the closeMenu function when the link is clicked
        onClick={closeMenu}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default MenuItem;
