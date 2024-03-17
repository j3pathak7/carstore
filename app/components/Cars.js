"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import CarCard from "./CarCard";
import ReactPaginate from "react-paginate";

const Cars = () => {
  const [carList, setCarList] = useState([]);
  const [carBrands, setCarBrands] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // State to control filter visibility
  const [showSort, setShowSort] = useState(false); // State to control sort visibility

  const [filteredBrand, setFilteredBrand] = useState(null);
  const [filteredTransmission, setFilteredTransmission] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carCollectionRef = collection(db, "cars");
        let carQuery = query(carCollectionRef);

        // Apply filtering by car brand and transmission
        if (filteredBrand && filteredTransmission) {
          carQuery = query(
            carCollectionRef,
            where("carBrand", "==", filteredBrand),
            where("transmission", "==", filteredTransmission)
          );
        } else if (filteredBrand) {
          carQuery = query(
            carCollectionRef,
            where("carBrand", "==", filteredBrand)
          );
        } else if (filteredTransmission) {
          carQuery = query(
            carCollectionRef,
            where("transmission", "==", filteredTransmission)
          );
        }

        // Apply sorting by price
        if (sortByPrice) {
          carQuery = query(carQuery, orderBy("price", sortByPrice));
        }

        const data = await getDocs(carQuery);
        const carData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCarList(carData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [filteredBrand, filteredTransmission, sortByPrice]);

  const pageCount = Math.ceil(carList.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleBrandFilterChange = (event) => {
    setFilteredBrand(event.target.value);
    setPageNumber(0); // Reset page number when filter changes
  };

  const handleTransmissionFilterChange = (event) => {
    const selectedTransmission = event.target.value;
    setFilteredTransmission(selectedTransmission);
    setPageNumber(0); // Reset page number when filter changes
  };

  const handlePriceSortChange = (event) => {
    setSortByPrice(event.target.value);
    setPageNumber(0); // Reset page number when sort changes
  };

  return (
    <div className="container mx-auto p-8 text-teal-800">
      <h1 className="text-4xl font-bold mb-4">List of Cars</h1>
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
        {/* Filter and Sort options go here */}
        {showFilter && (
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="m-4">
              <label htmlFor="brandFilter" className="mr-2">
                Brand:
              </label>
              <select
                id="brandFilter"
                className="px-3 py-2 border border-gray-300 rounded-md bg-white"
                onChange={handleBrandFilterChange}
                value={filteredBrand || ""}
              >
                <option value="">All Brands</option>
                <option value="Toyota">Toyota</option>
                <option value="Maruti">Maruti</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Ford">Ford</option>
                ))
              </select>
            </div>
            <div className="mb-4 md:m-4">
              <label htmlFor="transmissionFilter" className="mr-2">
                Transmission:
              </label>
              <select
                id="transmissionFilter"
                className="px-3 py-2 border border-gray-300 rounded-md bg-white"
                onChange={handleTransmissionFilterChange}
                value={filteredTransmission || ""}
              >
                <option value="">All Transmissions</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
              </select>
            </div>
          </div>
        )}
        {showSort && (
          <div className="m-4 flex justify-center">
            <label htmlFor="priceSort" className="mr-2">
              Price:
            </label>
            <select
              id="priceSort"
              className="px-3 py-2 border border-gray-300 rounded-md bg-white"
              onChange={handlePriceSortChange}
              value={sortByPrice || ""}
            >
              <option value="">No Sorting</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {carList
          .slice(pageNumber * carsPerPage, (pageNumber + 1) * carsPerPage)
          .map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
      </div>
      <div className="m-8">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default Cars;
