"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import CarCard from "./CarCard";
import Search from "./Search";
import Pagination from "./Pagination";

const Cars = () => {
  const [carList, setCarList] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const [filteredBrand, setFilteredBrand] = useState(null);
  const [filteredTransmission, setFilteredTransmission] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carCollectionRef = collection(db, "cars");
        let carQuery = query(carCollectionRef);

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

  const totalPages = Math.ceil(carList.length / carsPerPage);
  const currentPageCars = carList.slice(
    pageNumber * carsPerPage,
    (pageNumber + 1) * carsPerPage
  );

  const changePage = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handleBrandFilterChange = (event) => {
    const selectedBrand = event.target.value;
    setFilteredBrand(selectedBrand);
    setPageNumber(0);
  };

  const handleTransmissionFilterChange = (event) => {
    const selectedTransmission = event.target.value;
    setFilteredTransmission(selectedTransmission);
    setPageNumber(0);
  };

  const handlePriceSortChange = (event) => {
    const selectedSortByPrice = event.target.value;
    setSortByPrice(selectedSortByPrice);
    setPageNumber(0);
  };

  const resetFilters = () => {
    setFilteredBrand(null);
    setFilteredTransmission(null);
    setSortByPrice(null);
    setPageNumber(0);
  };

  const showNoCarsMessage =
    filteredBrand !== null ||
    filteredTransmission !== null ||
    sortByPrice !== null;

  return (
    <div>
      <Search />
      <div className="container mx-auto px-8">
        <h1 className="pb-4 heading text-cyan-500 pt-2">
          <span className="text-cyan-700">List of</span> Cars
        </h1>
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
              <div className="m-4">
                <label htmlFor="brandFilter" className="mr-2 text-cyan-50">
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
                </select>
              </div>
              <div className=" flex justify-center  items-center md:m-4">
                <label
                  htmlFor="transmissionFilter"
                  className="mr-2 text-cyan-50"
                >
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
            <div className="m-4 flex justify-center items-center">
              <label htmlFor="priceSort" className="mr-2 text-cyan-50">
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
        {showNoCarsMessage && carList.length === 0 && (
          <div className="m-8">
            <p className="text-red-600 text-center mx-8">
              Sorry, we couldn&apos;t find any cars as per your filters. Would
              you like to adjust your criteria or explore other options?
            </p>
            <div className="flex justify-center m-8">
              <button className="btn" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          </div>
        )}
        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-cyan-800">
          {currentPageCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={pageNumber}
          changePage={changePage}
        />
      </div>
    </div>
  );
};

export default Cars;
