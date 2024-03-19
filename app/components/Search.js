"use client";
import Link from "next/link";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to search results page with search term
  };

  return (
    <div className="flex justify-center m-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex flex-col md:flex-row items-stretch md:items-center rounded-t-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 rounded-t-md md:rounded-l-md sm:text-sm"
          />
          <Link href={`/search/${searchTerm}`}>
            <button
              type="submit"
              className="w-full md:w-auto mt-4 md:mt-0 px-4 py-2 text-white bg-cyan-500 hover:bg-cyan-700 rounded-b-md md:rounded-l-none rounded-r-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              Search
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
