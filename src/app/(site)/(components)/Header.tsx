"use client";

import { useState } from "react";
import Link from "next/link";
import { menuList } from "@/constants/menuList";
import { Bars, Logo, Close, CustomLink, CartIcon } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { openCart } from "@/redux/slices/cartSlice";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => setMenuOpen(!menuOpen);
  const closeMenu = (): void => setMenuOpen(false);
  const dispatch = useAppDispatch();

  return (
    <header className="border-b border-b-concrete">
      <div className="main__container">
        <nav className="flex h-24 items-center gap-6 lg:h-28">
          <Link href="/" className="flex gap-1" onClick={closeMenu}>
            <Logo />
            <span className="hidden lg:inline-block">aliv</span>
          </Link>

          <div className="flex-grow">
            <Link
              href="/jobs"
              className="text-xs px-4 py-2 bg-spanish-white border border-spanish-white rounded-full text-center hover:bg-ablack hover:text-white transition-colors md:inline-block lg:flex-grow-0 lg:text-base"
              onClick={closeMenu}
            >{`We're hiring`}</Link>
          </div>

          <div
            className={`fixed bg-black top-0 left-0 h-full w-full lg:hidden ${
              menuOpen ? "opacity-50 z-10 " : "opacity-0 -z-10"
            }`}
            onClick={closeMenu}
          ></div>
          <ul
            className={`absolute top-28 left-4 right-4 bg-ablack p-8 flex flex-col gap-6 w-85 mx-auto opacity-0 -z-10 transition-all md:w-90  lg:relative lg:top-auto lg:left-auto lg-right-auto lg:bg-transparent lg:p-0 lg:flex-row lg:gap-9 lg:flex-grow lg:justify-end lg:w-auto lg:z-0 lg:opacity-100 lg:translate-y-0 ${
              menuOpen && "opacity-100 z-10 "
            }`}
          >
            {menuList.map((link) => (
              <li key={link.id}>
                <CustomLink
                  {...link}
                  onClick={closeMenu}
                  darkBg={true}
                  uppercase={true}
                />
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="text-xs inline-block px-4 py-2 border border-ablack rounded-full text-center hover:bg-ablack hover:text-white transition-colors lg:px-6 lg:py-3 lg:flex-grow-0 lg:text-base"
            onClick={closeMenu}
          >
            {"Let's talk"}
          </Link>

          <button
            className={`${menuOpen && "z-10"} lg:hidden`}
            title="Toggle Mobile Menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <Close /> : <Bars />}
          </button>
          <button
            onClick={() => {
              closeMenu();
              dispatch(openCart());
            }}
            className="relative"
            title="Cart Button"
          >
            <span className="absolute bg-spanish-white p-3 rounded-full h-6 w-6 flex items-center justify-center -top-3 -right-3">
              2
            </span>
            <span>
              <CartIcon />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
