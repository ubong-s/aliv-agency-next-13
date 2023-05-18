"use client";

import { useState } from "react";
import Link from "next/link";
import { menuList } from "@/constants/menuList";
import { Bars, Logo, Close } from "@/components";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);
  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header>
      <div className="main__container">
        <nav className="flex h-24 items-center gap-6 lg:h-36 ">
          <Link href="/" className="flex gap-1" onClick={closeMenu}>
            <Logo />
            aliv
          </Link>

          <Link
            href="/jobs"
            className="px-4 py-2 bg-spanish-white border border-spanish-white rounded-full flex-grow text-center hover:bg-ablack hover:text-white transition-colors  lg:flex-grow-0 "
            onClick={closeMenu}
          >{`We're hiring`}</Link>

          <ul
            className={`absolute top-28 left-4 right-4 bg-ablack p-8 flex flex-col gap-6 w-85 mx-auto opacity-0 translate-y-full -z-10 transition-all md:w-90  lg:relative lg:top-auto lg:left-auto lg-right-auto lg:bg-transparent lg:p-0 lg:flex-row lg:gap-9 lg:flex-grow lg:justify-end lg:w-auto lg:z-0 lg:opacity-100 lg:translate-y-0 ${
              menuOpen && "opacity-100 z-10 translate-y-1"
            }`}
          >
            {menuList.map(({ id, link, text }) => (
              <li key={id}>
                <a
                  href={link}
                  className="relative uppercase text-sm text-white lg:capitalize lg:text-ablack lg:text-base after:absolute after:content-[''] after:-bottom-1 after:left-0 after:w-0 after:h-1px after:bg-white after:invisible lg:after:bg-ablack  hover:after:w-full hover:after:visible hover:after:transition-all"
                  onClick={closeMenu}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="px-4 py-2 border border-ablack rounded-full flex-grow text-center hover:bg-ablack hover:text-white transition-colors lg:flex-grow-0"
            onClick={closeMenu}
          >
            {"Let's talk"}
          </Link>

          <button
            className="lg:hidden"
            title="Toggle Mobile Menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <Close /> : <Bars />}
          </button>
        </nav>
      </div>
    </header>
  );
};