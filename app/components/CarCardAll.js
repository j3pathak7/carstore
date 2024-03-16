"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import CarCard from "./CarCard";

const CarCards = () => {
  const [carList, setCarList] = useState([]);
  const [filteredBrand, setFilteredBrand] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);

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

  const handleBrandFilterChange = (event) => {
    setFilteredBrand(event.target.value);
  };

  const handlePriceSortChange = (event) => {
    setSortByPrice(event.target.value);
  };

  return (
    <div className="container mx-auto p-8 text-teal-800">
      <h1 className="text-4xl font-bold mb-4">List of Cars</h1>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="mr-4 mb-4 md:mb-0">
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
        {carList.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarCards;
