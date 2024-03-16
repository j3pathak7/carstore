// pages/viewCars/[id].js
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const ViewCar = () => {
  const router = useRouter();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const { id } = router.query;
        const carDocRef = doc(db, "cars", id);
        const carSnapshot = await getDoc(carDocRef);
        const carData = carSnapshot.data();
        setCar(carData);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    if (router.query.id) {
      fetchCarDetails();
    }
  }, [router.query.id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8 text-teal-800">
      <h1 className="text-2xl font-bold mb-4">{car.carName}</h1>
      <div>
        <p>
          Make: {car.makeMonth} {car.makeYear}
        </p>
        <p>Price: {car.price} Lakhs</p>
        {/* Render other car details here */}
      </div>
    </div>
  );
};

export default ViewCar;
