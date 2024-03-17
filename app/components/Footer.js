import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-8">
      <div className="flex justify-center mb-4">
        {" "}
        {/* Left side */}
        <div className="mr-8">
          {" "}
          {/* Navigation */}
          <nav>
            <Link href="/about" className="mr-4">
              About us
            </Link>
            <Link href="/contact" className="mr-4">
              Contact
            </Link>
            <Link href="/address" className="mr-4">
              Address
            </Link>
          </nav>
        </div>
        <div>
          {" "}
          {/* Social media icons */}
          <div className="flex">
            <a className="mr-4">
              <FaTwitter size={24} />
            </a>
            <a className="mr-4">
              <FaFacebook size={24} />
            </a>
            <a>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        {" "}
        {/* Right side */}
        <div>
          {" "}
          {/* Image */}
          <Image
            src="/largelogo.png"
            width={200}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div>
        {" "}
        {/* Copyright notice */}
        <p className="text-center text-gray-600 text-sm">
          Copyright © 2024 - the Car Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
