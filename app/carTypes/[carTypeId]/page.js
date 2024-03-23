"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import CarCard from "@/app/components/CarCard";
import Link from "next/link";
import Message from "@/app/components/Message";

const CarTypePage = ({ params }) => {
  const { carTypeId } = params;
  const [carList, setCarList] = useState([]);
  const [notFound, setNotFound] = useState(false); // State for "not found" message

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!carTypeId) {
          console.error("Car Type ID is not provided.");
          return;
        }

        const carCollectionRef = collection(db, "cars");

        // Check if carType is a string value or a subcollection reference
        const isStringType = typeof carTypeId === "string";

        let carQuery;
        if (isStringType) {
          // Filter by carType string value (default behavior)
          carQuery = query(carCollectionRef, where("carType", "==", carTypeId));
        } else {
          // Handle carType as a subcollection reference
          const carTypeDocRef = doc(db, "carTypes", carTypeId);
          const carTypeDocSnap = await getDoc(carTypeDocRef);
          if (!carTypeDocSnap.exists) {
            console.error("Car type document not found:", carTypeId);
            setNotFound(true); // Set notFound state to true
            return;
          }

          // Construct a query to match cars referencing the car type document
          carQuery = query(
            carCollectionRef,
            where("carType", "==", carTypeDocRef)
          );
        }

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

    // Scroll to the top when the component mounts or when carTypeId changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [carTypeId]);

  return (
    <div className="container mx-auto p-8 mb--8">
      <h1 className="text-center heading">
        <span className="text-teal-700 py-8">Cars of Type</span> {carTypeId}
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

export default CarTypePage;
