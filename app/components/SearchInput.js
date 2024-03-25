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
    <div className=" p-2 flex items-center justify-between gap-2 bg-white rounded-full text-primary">
      <input
        type="text"
        className="border border-white text-sm"
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
