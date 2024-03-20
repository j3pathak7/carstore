"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Assuming you're using React Icons library

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to search results page with search term
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
    <form onSubmit={handleSubmit}>
      <div className="relative isolate overflow-hidden px-6 pt-8 text-center sm:px-16 sm:shadow-sm">
        <label
          className="mx-auto relative bg-white min-w-sm max-w-2xl flex flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="your keyword here"
            name="q"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            className="px-2 w-full rounded-md flex-1 outline-none bg-white sm:h-10"
            required=""
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
      </div>
    </form>
  );
};

export default Search;
