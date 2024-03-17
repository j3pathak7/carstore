"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import CarCard from "./CarCard";
import ReactPaginate from "react-paginate";

const CarCardsDemo = () => {
  const [carList, setCarList] = useState([]);
  const [filteredBrand, setFilteredBrand] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const carsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carCollectionRef = collection(db, "cars");
        let carQuery = query(carCollectionRef);

        // Apply filtering by car brand
        if (filteredBrand) {
          carQuery = query(
            carCollectionRef,
            where("carBrand", "==", filteredBrand)
          );
        }

        // Apply sorting by price
        if (sortByPrice) {
          carQuery = query(carCollectionRef, orderBy("price", sortByPrice));
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
  }, [filteredBrand, sortByPrice]);

  const pageCount = Math.ceil(carList.length / carsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleBrandFilterChange = (event) => {
    setFilteredBrand(event.target.value);
    setPageNumber(0); // Reset page number when filter changes
  };

  const handlePriceSortChange = (event) => {
    setSortByPrice(event.target.value);
    setPageNumber(0); // Reset page number when sort changes
  };

  return (
    <div className="container mx-auto p-8 text-teal-800">
      <div className="text-4xl mb-4">List of Cars</div>
      <div className="flex justify-center md:flex-row items-center mb-4">
        <div className="m-4">
          <label htmlFor="brandFilter" className="mr-2">
            Filter by Brand:
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
        <div>
          <label htmlFor="priceSort" className="mr-2">
            Sort by Price:
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

export default CarCardsDemo;
