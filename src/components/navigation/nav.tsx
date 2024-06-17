"use client";
import { useState } from "react";
import links from "./links";
import NavItem from "./navitem";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav>
      <ul className="lg:flex gap-5 lowercase text-sm hidden">
        {links.map((link) => (
          // <li key={link.path}>
          //   <a href={link.path}>{link.label}</a>
          // </li>
          <NavItem key={link.path} href={link.path} label={link.label} />
        ))}
      </ul>

      <div className="inline-flex lg:hidden">
        <svg
          onClick={() => setMobileMenu(!mobileMenu)}
          className="h-6 w-6 cursor-pointer "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-label="Toggle Mobile Menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {mobileMenu && (
        <div className="fixed top-0 left-0 bg-black text-white z-50 w-full h-full lg:hidden block p-10">
          <ul className="flex flex-col gap-5 text-7xl uppercase font-extrabold ">
            {links.map((link) => (
              <NavItem key={link.path} href={link.path} label={link.label} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
