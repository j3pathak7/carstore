"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import {
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineStar,
} from "react-icons/ai";

function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("w-0");
  const menu = <AiOutlineMenu className="text-xl self-center cursor-pointer" />;
  const close = (
    <AiOutlineClose className=" text-xl self-center cursor-pointer" />
  );
  const [menuButton, setMenuButton] = useState(menu);

  const home = <FaCar className="self-center text-teal-700" />;
  const about = <AiOutlineInfoCircle className="self-center text-teal-700" />;
  const contact = <AiOutlinePhone className="self-center text-teal-700" />;
  const reviews = <AiOutlineStar className="self-center text-teal-700" />;

  const toggleSideBar = () => {
    if (sideBarWidth === "w-0") {
      setSideBarWidth("w-72");
      setMenuButton(close);
    } else {
      setSideBarWidth("w-0");
      setMenuButton(menu);
    }
  };

  const closeSideBar = () => {
    setSideBarWidth("w-0");
    setMenuButton(menu);
  };

  return (
    <nav className="sticky top-0  text-teal-50 backdrop-blur-lg z-20 flex justify-between px-5 md:px-10 lg:px-20 xl:px-36 py-2 lg:py-4 shadow-md">
      {/* Logo */}
      <div className="self-center flex gap-2">
        <Link
          href="/"
          className="self-center font-semibold text-lg lg:text-xl text-teal-800 flex items-center"
        >
          <Image
            src="/navLogo.jpeg"
            width={50}
            height={50}
            alt="Picture of the author"
            className="p-2"
          />
          THE CAR STORE
        </Link>
      </div>

      {/* Navigation */}
      <ul className="hidden self-center lg:flex space-x-8 [&>*]:p-2">
        <li>
          <Link
            href="/viewCars"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {home}View Cars
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {about}About us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {contact}Contact
          </Link>
        </li>
        <li>
          <Link
            href="/reviews"
            className="hover:scale-105 duration-150 flex items-center gap-2"
          >
            {reviews}Reviews
          </Link>
        </li>
      </ul>

      <div
        onClick={toggleSideBar}
        className="lg:hidden flex justify-center items-center"
      >
        {menuButton}
      </div>

      <div
        className={`block lg:hidden absolute right-0 top-10 ${sideBarWidth} h-screen overflow-y-hidden bg-teal-950 duration-300 opacity-95`}
      >
        <ul className="self-center space-y-8 [&>*]:p-2 py-10 px-3 text-teal-50">
          <li>
            <Link
              href="/viewCars"
              onClick={closeSideBar}
              className="hover:scale-105 duration-150 flex items-center gap-2"
            >
              {home}View Cars
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={closeSideBar}
              className="hover:scale-105 duration-150 flex items-center gap-2"
            >
              {about}About us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={closeSideBar}
              className="hover:scale-105 duration-150 flex items-center gap-2"
            >
              {contact}Contact
            </Link>
          </li>
          <li>
            <Link
              href="/reviews"
              onClick={closeSideBar}
              className="hover:scale-105 duration-150 flex items-center gap-2"
            >
              {reviews}Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
