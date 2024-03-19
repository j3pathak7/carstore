"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const CarTypes = () => {
  const [showAllTypes, setShowAllTypes] = useState(false);

  const carTypes = [
    { id: "Sedan", name: "Sedan", alt: "Sedan Car" },
    { id: "Hatchback", name: "Hatchback", alt: "Hatchback Car" },
    { id: "SUV", name: "SUV", alt: "SUV Car" },
    { id: "Crossover", name: "Crossover", alt: "Crossover Car" },
    { id: "Convertible", name: "Convertible", alt: "Convertible Car" },
    { id: "Coupe", name: "Coupe", alt: "Coupe Car" },
    { id: "Truck", name: "Truck", alt: "Truck" },
    { id: "Van", name: "Van", alt: "Van" },
  ];

  const visibleTypes = showAllTypes ? carTypes : carTypes.slice(0, 6);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <h1 className="heading text-center m-8 p-8">Choose by Car Type:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 m-8">
        {visibleTypes.map((type) => (
          <Link
            key={type.id}
            href={`/carTypes/${type.id}`}
            className="border p-2 sm:p-4 flex flex-col justify-center items-center bg-white shadow-2xl shadow-teal-500 rounded-2xl h-48 object-contain"
          >
            <Image
              src={`/CarTypes/${type.id}.png`}
              width={500}
              height={500}
              alt={type.alt}
            />
            <p className="mt-2 text-center">{type.name}</p>
          </Link>
        ))}
      </div>
      {!showAllTypes && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllTypes(true)}
            className="btn bg-white text-teal-600 rounded mb-32"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default CarTypes;
