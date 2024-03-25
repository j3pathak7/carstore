"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (searchTerm.trim() !== "") {
        window.location.href = `/search/${encodeURIComponent(searchTerm)}`;
      }
    }
  };

  return (
    <div className=" py-2 px-4 flex items-center justify-between gap-2 bg-white rounded-full text-primary">
      <input
        type="text"
        className=" text-sm no-outline"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Link href={`/search/${encodeURIComponent(searchTerm)}`}>
        <CiSearch />
      </Link>
    </div>
  );
};

export default SearchInput;
