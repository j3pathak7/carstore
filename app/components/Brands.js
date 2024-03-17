"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);

  const brands = [
    { name: "hyundai", alt: "Hyundai Logo" },
    { name: "suzuki", alt: "Suzuki Logo" },
    { name: "tata", alt: "Tata Logo" },
    { name: "ford", alt: "Ford Logo" },
    { name: "honda", alt: "Honda Logo" },
    { name: "volkswagen", alt: "Volkswagen Logo" },
    { name: "chevrolet", alt: "Chevrolet Logo" },
    { name: "kia", alt: "Kia Logo" },
    { name: "mercedes", alt: "Mercedes Logo" },
    { name: "renault", alt: "Renault Logo" },
    { name: "toyota", alt: "Toyota Logo" },
    { name: "bmw", alt: "BMW Logo" },
  ];

  const visibleBrands = showAllBrands ? brands : brands.slice(0, 6);

  return (
    <div>
      <h1 className="heading text-center m-8 p-8"> Choose by Brand: </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 mb-8">
        {visibleBrands.map((brand, index) => (
          <div
            key={index}
            className="border p-2 sm:p-4 flex justify-center items-center border-teal-200"
          >
            <Image
              src={`/Brands/${brand.name}.png`}
              width={500}
              height={500}
              alt={brand.alt}
            />
          </div>
        ))}
      </div>
      {!showAllBrands && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllBrands(true)}
            className="btn bg-white text-teal-600 rounded mb-32"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Brands;
