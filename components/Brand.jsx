import Link from "next/link";

const Brand = () => {
  return (
    <Link href={"/"} className="text-blue-500 font-medium text-[26px]">
      Stay<span className="text-blue-900">cation.</span>
    </Link>
  );
};

export default Brand;
