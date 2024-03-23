import React from "react";

const Filter = ({
  showFilter,
  setShowFilter,
  showSort,
  setShowSort,
  handleBrandFilterChange,
  handleTransmissionFilterChange,
  handlePriceSortChange,
  filteredBrand,
  filteredTransmission,
  sortByPrice,
}) => {
  return (
    <div className="md:flex justify-between items-center mb-4 md:h-10">
      <div className="flex">
        <button
          className="mr-4 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
          onClick={() => setShowSort(!showSort)}
        >
          Sort
        </button>
      </div>
      {showFilter && (
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Brand filter */}
          {/* Transmission filter */}
        </div>
      )}
      {showSort && (
        <div className="m-4 flex justify-center items-center">
          {/* Price sort */}
        </div>
      )}
    </div>
  );
};

export default Filter;
