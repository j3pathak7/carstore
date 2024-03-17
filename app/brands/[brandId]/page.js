"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import CarCard from "@/app/components/CarCard";

const CarDetailsPage = ({ params }) => {
  const { brandId } = params;
  const [carList, setCarList] = useState([]);

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
        setCarList(carData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [brandId]);

  return (
    <div className="container mx-auto p-8 mb--8">
      <h1 className="text-center heading">
        <span className="text-teal-900 py-8">Cars from</span> {brandId} Brand
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {carList.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarDetailsPage;
