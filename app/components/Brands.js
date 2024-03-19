"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const Brands = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);

  const brands = [
    { id: "hyundai", name: "Hyundai", alt: "Hyundai Logo" },
    { id: "suzuki", name: "Maruti", alt: "Suzuki Logo" },
    { id: "tata", name: "Tata", alt: "Tata Logo" },
    { id: "ford", name: "Ford", alt: "Ford Logo" },
    { id: "honda", name: "Honda", alt: "Honda Logo" },
    { id: "volkswagen", name: "Volkswagen", alt: "Volkswagen Logo" },
    { id: "chevrolet", name: "Chevrolet", alt: "Chevrolet Logo" },
    { id: "kia", name: "Kia", alt: "Kia Logo" },
    { id: "mercedes", name: "Mercedes", alt: "Mercedes Logo" },
    { id: "renault", name: "Renault", alt: "Renault Logo" },
    { id: "toyota", name: "Toyota", alt: "Toyota Logo" },
    { id: "bmw", name: "BMW", alt: "BMW Logo" },
  ];

  const visibleBrands = showAllBrands ? brands : brands.slice(0, 6);

  useEffect(() => {
    Aos.init();
  });

  return (
    <div data-aos="fade-dowp" data-aos-duration="2000">
      <h1
        className="heading text-center m-8 p-8 text-cyan-700"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Choose by <span className="text-cyan-500">Brand:</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 m-8 ">
        {visibleBrands.map((brand, index) => (
          <Link
            key={index}
            href={`/brands/${brand.name}`}
            data-aos="fade-up"
            data-aos-duration="500"
            className="border p-2 sm:p-4 flex justify-center items-center bg-white shadow-2xl shadow-cyan-500  rounded-2xl h-36 object-contain"
          >
            <Image
              src={`/Brands/${brand.id}.png`}
              width={500}
              height={500}
              data-aos="fade-up"
              data-aos-duration="500"
              alt={brand.alt}
            />
          </Link>
        ))}
      </div>
      {!showAllBrands && (
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <button
            onClick={() => setShowAllBrands(true)}
            className="btn bg-white text-cyan-600 rounded mb-32"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Brands;
