import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];
const Navigation = ({ activeItem }) => {
  return (
    <div className="flex flex-col md:flex-row">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`block md:inline-block md:px-4 xl:px-8 py-5 dark:to-white md:py-0 text-[16px] font-[600] font-Monserrat ${
              activeItem === index && "text-orange-600"
            }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
