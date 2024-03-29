import React from "react";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
import SearchInput from "./SearchInput"; // Import the SearchInput component

function LargeNavBar() {
  return (
    <ul className="hidden self-center lg:flex items-center space-x-4 [&>*]:p-1">
      <li>
        <Link
          href="/viewCars"
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <FaCarSide className="self-center text-cyan-500" />
          Inventory
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlineInfoCircle className="self-center text-cyan-500" /> About
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlinePhone className="self-center text-cyan-500" /> Contact
        </Link>
      </li>
      <li>
        <Link
          href="/finance"
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <FaMoneyBill1Wave className="self-center text-cyan-500" /> Finance
        </Link>
      </li>
      <li>
        <Link
          href="/reviews"
          className="hover:scale-105 duration-150 flex items-center gap-2"
        >
          <AiOutlineStar className="self-center text-cyan-500" /> Reviews
        </Link>
      </li>
      <li>
        {/* Include the SearchInput component here */}
        <SearchInput />
      </li>
    </ul>
  );
}

export default LargeNavBar;
