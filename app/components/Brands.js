"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);

  const brands = [
    { id: "Hyundai", name: "Hyundai", alt: "Hyundai Logo" },
    { id: "Suzuki", name: "Maruti", alt: "Suzuki Logo" },
    { id: "Tata", name: "Tata", alt: "Tata Logo" },
    { id: "Ford", name: "Ford", alt: "Ford Logo" },
    { id: "Honda", name: "Honda", alt: "Honda Logo" },
    { id: "Volkswagen", name: "Volkswagen", alt: "Volkswagen Logo" },
    { id: "Chevrolet", name: "Chevrolet", alt: "Chevrolet Logo" },
    { id: "Kia", name: "Kia", alt: "Kia Logo" },
    { id: "Mercedes", name: "Mercedes", alt: "Mercedes Logo" },
    { id: "Renault", name: "Renault", alt: "Renault Logo" },
    { id: "Toyota", name: "Toyota", alt: "Toyota Logo" },
    { id: "Bmw", name: "BMW", alt: "BMW Logo" },
  ];

  const visibleBrands = showAllBrands ? brands : brands.slice(0, 6);

  return (
    <div>
      <h1 className="heading text-center m-8 p-8"> Choose by Brand: </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 mb-8">
        {visibleBrands.map((brand, index) => (
          <Link
            key={index}
            href={`/brands/${brand.name}`}
            className="border p-2 sm:p-4 flex justify-center items-center border-teal-200"
          >
            <Image
              src={`/Brands/${brand.id}.png`}
              width={500}
              height={500}
              alt={brand.alt}
            />
          </Link>
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
