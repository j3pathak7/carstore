import React from "react";

const Pagination = ({ totalPages, currentPage, changePage }) => {
  const visiblePages = 1; // Number of visible page numbers
  const pages = [];

  // Calculate the start and end index of visible pages
  let start = Math.max(0, currentPage - Math.floor(visiblePages / 2));
  let end = Math.min(totalPages - 1, start + visiblePages - 1);

  // Adjust start and end if they are too close to the beginning or end
  if (end === totalPages - 1) {
    start = Math.max(0, end - visiblePages + 1);
  } else if (start === 0) {
    end = Math.min(totalPages - 1, start + visiblePages - 1);
  }

  // Add visible pages to the array
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      {currentPage > 0 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => changePage(currentPage - 1)}
        >
          &laquo;
        </button>
      )}
      {start > 0 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => changePage(0)}
        >
          1
        </button>
      )}
      {start > 1 && <span className="mx-1 px-4 py-2 bg-gray-200">...</span>}
      {pages.map((index) => (
        <button
          key={index}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === index
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => changePage(index)}
        >
          {index + 1}
        </button>
      ))}
      {end < totalPages - 2 && (
        <span className="mx-1 px-4 py-2 bg-gray-200">...</span>
      )}
      {end < totalPages - 1 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => changePage(totalPages - 1)}
        >
          {totalPages}
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => changePage(currentPage + 1)}
        >
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
