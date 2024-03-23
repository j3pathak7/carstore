const Pagination = ({ totalPages, currentPage, changePage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  return (
    <div className="flex justify-center mt-8">
      {currentPage > 0 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            scrollToTop();
            changePage(currentPage - 1);
          }}
        >
          &laquo; Prev
        </button>
      )}
      <span className="mx-1 px-4 py-2 rounded bg-cyan-500 text-white">
        {currentPage + 1}
      </span>
      {currentPage < totalPages - 1 && (
        <button
          className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            scrollToTop();
            changePage(currentPage + 1);
          }}
        >
          Next &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
