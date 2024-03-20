import React, { useState } from "react";
import Link from "next/link";

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
    <div>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Link href={`/search/${encodeURIComponent(searchTerm)}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </label>
    </div>
  );
};

export default SearchInput;
