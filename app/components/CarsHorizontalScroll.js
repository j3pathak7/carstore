"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import HorizontalScrollCard from "./HorizontalScrollCard";
import Link from "next/link";

const CarsHorizontalScroll = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carCollectionRef = collection(db, "cars");
        const data = await getDocs(carCollectionRef);
        const carData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCarList(carData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h2 className="m-8 heading">Featured Cars</h2>
      <div className="flex overflow-x-auto p-4 space-x-4">
        {carList.map((car) => (
          <div
            key={car.id}
            className="car-card"
            style={{ height: "200px", width: "300px" }}
          >
            <HorizontalScrollCard car={car} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        {" "}
        {/* Flex container to center the button */}
        <Link href="/viewCars" className="btn w-40">
          See all cars
        </Link>
      </div>
    </div>
  );
};

export default CarsHorizontalScroll;
