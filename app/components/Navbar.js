"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

function NavBar() {
  const [sideBarWidth, setSideBarWidth] = useState("w-0");
  const [menuButton, setMenuButton] = useState(
    <AiOutlineMenu className="text-xl self-center cursor-pointer" />
  );

  const toggleSideBar = () => {
    if (sideBarWidth === "w-0") {
      setSideBarWidth("w-72");
      setMenuButton(
        <AiOutlineClose className=" text-xl self-center cursor-pointer" />
      );
    } else {
      setSideBarWidth("w-0");
      setMenuButton(
        <AiOutlineMenu className="text-xl self-center cursor-pointer" />
      );
    }
  };

  const closeSideBar = () => {
    setSideBarWidth("w-0");
    setMenuButton(
      <AiOutlineMenu className="text-xl self-center cursor-pointer" />
    );
  };

  return (
    <nav className="stick bg-black top-0 text-cyan-50 backdrop-blur-lg z-20 flex justify-between px-5 md:px-10 lg:px-20 xl:px-36 py-2 lg:py-4 shadow-md">
      {/* Logo */}
      <div className="self-center flex items-center">
        <Link
          href="/"
          className="self-center text-lg lg:text-xl text-cyan-400"
          style={{ textTransform: "uppercase" }}
        >
          <span style={{ fontSize: "1.5em" }}>T</span>
          <span style={{ fontSize: "1em", marginRight: "0.3em" }}>HE</span>
          <span style={{ fontSize: "1.5em" }}>C</span>
          <span style={{ fontSize: "1em", marginRight: "0.3em" }}>AR</span>
          <span style={{ fontSize: "1.5em" }}>S</span>
          <span style={{ fontSize: "1em", marginRight: "0.3em" }}>TORE</span>
        </Link>
      </div>

      {/* Navigation */}
      <LargeNavBar />

      <div
        onClick={toggleSideBar}
        className="lg:hidden flex justify-center items-center"
      >
        {menuButton}
      </div>

      <div
        className={`block lg:hidden absolute right-0 top-10 ${sideBarWidth} h-screen overflow-y-hidden bg-cyan-950 duration-300 opacity-95`}
      >
        <SmallNavBar closeSideBar={closeSideBar} />
      </div>
    </nav>
  );
}

export default NavBar;
