"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineHistory,
  AiOutlineContacts,
  AiOutlineQuestion,
  AiOutlineLink,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("w-0");
  const menu = <AiOutlineMenu className="text-xl self-center cursor-pointer" />;
  const close = (
    <AiOutlineClose className=" text-xl self-center cursor-pointer" />
  );
  const [menubutton, setMenuButton] = useState(menu);

  const home = <AiOutlineHome className="self-center text-teal-700" />;
  const about = <AiOutlineHistory className="self-center text-teal-700" />;
  const contact = <AiOutlineContacts className="self-center text-teal-700" />;
  const help = <AiOutlineQuestion className="self-center text-teal-700" />;
  const link = (
    <AiOutlineLink className="self-center text-teal-700 text-lg hover:scale-110" />
  );

  function toggleSideBar() {
    if (sideBarWidth === "w-0") {
      setSideBarWidth("w-72");
      setMenuButton(close);
    } else {
      setSideBarWidth("w-0");
      setMenuButton(menu);
    }
  }

  return (
    <nav className="sticky top-0 bg-gray-100 text-teal-950 backdrop-blur-lg border-b-2 z-20 flex justify-between px-5 md:px-10 lg:px-20 xl:px-36 py-2 lg:py-4 shadow-md">
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
      </ul>

      <div onClick={toggleSideBar} className="lg:hidden">
        {menubutton}
      </div>

      <div
        className={`block lg:hidden absolute right-0 top-10 ${sideBarWidth} h-screen overflow-y-hidden bg-gray-50 duration-300`}
      >
        <ul className="self-center space-y-8 [&>*]:p-2 py-10 px-3">
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
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
