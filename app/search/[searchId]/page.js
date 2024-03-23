"use client";
import React, { useState, useEffect } from "react";
import lunr from "lunr";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Assuming CarCard component is defined elsewhere
import CarCard from "@/app/components/CarCard";
import Link from "next/link";
import Message from "@/app/components/Message";

const SearchResults = ({ params }) => {
  const { searchId } = params;
  const [carList, setCarList] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [carData, setCarData] = useState([]); // State to store fetched car data

  // Create Lunr index function (reusable)
  const createLunrIndex = (data) => {
    return lunr(function () {
      this.field("carName");
      this.field("description"); // Add other searchable fields if needed
      data.forEach((car) => this.add(car));
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carCollectionRef = collection(db, "cars");
        const data = await getDocs(carCollectionRef);
        const fetchedCarData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCarData(fetchedCarData);
      } catch (err) {
        console.error("Error fetching car data:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!searchId || carData.length === 0) return;

    const idx = createLunrIndex(carData); // Create index with fetched data

    const results = idx.search(searchId);
    const matchingCarIds = results.map((result) => result.ref);

    const filteredCarList = carData.filter((car) =>
      matchingCarIds.includes(car.id)
    );

    if (filteredCarList.length === 0) {
      setNotFound(true);
    } else {
      setCarList(filteredCarList);
      setNotFound(false);
    }
  }, [searchId, carData]);

  return (
    <div className="container mx-auto p-8 m-8">
      <h1 className="text-center heading">
        <span className="text-cyan-900 py-8">Search Results for: </span>
        {searchId}
      </h1>
      {notFound ? (
        <Message />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {carList.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
