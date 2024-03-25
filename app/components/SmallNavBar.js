import React from "react";
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import SearchInput from "./SearchInput"; // Import the SearchInput component

function SmallNavBar({ closeSideBar }) {
  return (
    <ul className="self-center space-y-8 [&>*]:p-1 py-10 px-3 text-cyan-50">
      <li>
        {/* Include the SearchInput component at the top */}
        <SearchInput />
      </li>
      <li>
        <Link
          href="/viewCars"
          onClick={closeSideBar}
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <FaCar className="self-center text-cyan-500" /> Inventory
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          onClick={closeSideBar}
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlineInfoCircle className="self-center text-cyan-500" /> About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          onClick={closeSideBar}
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlinePhone className="self-center text-cyan-500" /> Contact
        </Link>
      </li>
      <li>
        <Link
          href="/finance"
          onClick={closeSideBar}
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <FaMoneyBill1Wave className="self-center text-cyan-500" /> Finance
        </Link>
      </li>
      <li>
        <Link
          href="/reviews"
          onClick={closeSideBar}
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlineStar className="self-center text-cyan-500" /> Reviews
        </Link>
      </li>
    </ul>
  );
}

export default SmallNavBar;
