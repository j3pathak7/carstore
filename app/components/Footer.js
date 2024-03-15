import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gray-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/address">Address</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter className="fill-current text-black" size={24} />
            </a>
            <a>
              <FaFacebook className="fill-current text-black" size={24} />
            </a>
            <a>
              <FaInstagram className="fill-current text-black" size={24} />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - the Car Store</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
