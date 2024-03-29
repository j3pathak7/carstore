"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CarCard from "@/app/components/CarCard";
import Link from "next/link";
import Message from "@/app/components/Message";

const CarDetailsPage = ({ params }) => {
  const { brandId } = params;
  const [carList, setCarList] = useState([]);
  const [notFound, setNotFound] = useState(false); // State for "not found" message

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!brandId) {
          console.error("Brand ID is not provided.");
          return;
        }

        const carCollectionRef = collection(db, "cars");
        const carQuery = query(
          carCollectionRef,
          where("carBrand", "==", brandId)
        );

        const data = await getDocs(carQuery);
        const carData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (carData.length === 0) {
          setNotFound(true); // Set notFound state to true if no cars found
        } else {
          setCarList(carData);
          setNotFound(false); // Reset notFound state if cars found
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();

    // Scroll to the top when the component mounts or when brandId changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [brandId]);

  return (
    <div className="container mx-auto p-8 mb--8">
      <h1 className="text-center text-4xl md:text-6xl text-white">
        Cars from <span className="text-gradient">{brandId} </span>Brand
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

export default CarDetailsPage;
