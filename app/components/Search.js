"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      window.location.href = `/search/${searchTerm}`;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="relative h-1/2">
        <div className="absolute inset-0">
          <Image
            src="/searchCar.jpeg"
            alt="Car Image"
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="absolute inset-0 opacity-50"></div>
        </div>
        <div className="relative z-10 flex justify-center items-center h-full px-6 py-6">
          <form onSubmit={handleSubmit} className="max-w-2xl w-full">
            <label
              className="relative bg-white flex flex-row items-center justify-center border py-2 px-2 rounded-full gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                placeholder="Search for a car"
                name="q"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                className="px-2 w-full rounded-md flex-1 outline-none bg-white sm:h-10"
                required
                type="text"
              />
              {/* React icon for small devices */}
              <div className="md:hidden">
                <Link href={`/search/${searchTerm}`}>
                  <FiSearch className="text-gray-600 h-6 w-6 ml-2 cursor-pointer" />
                </Link>
              </div>
              {/* Button for larger screens */}
              <div className="hidden md:block">
                <Link href={`/search/${searchTerm}`}>
                  <button
                    type="submit"
                    className="px-6 btn border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
                  >
                    <div className="flex items-center transition-all opacity-1">
                      <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                        Search
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
