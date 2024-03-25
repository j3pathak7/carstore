"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const CarTypes = () => {
  const [showAllTypes, setShowAllTypes] = useState(false);

  const carTypes = [
    { id: "sedan", name: "Sedan", alt: "Sedan Car" },
    { id: "hatchback", name: "Hatchback", alt: "Hatchback Car" },
    { id: "suv", name: "SUV", alt: "SUV Car" },
    { id: "crossover", name: "Crossover", alt: "Crossover Car" },
    { id: "convertible", name: "Convertible", alt: "Convertible Car" },
    { id: "coupe", name: "Coupe", alt: "Coupe Car" },
    { id: "truck", name: "Truck", alt: "Truck" },
    { id: "van", name: "Van", alt: "Van" },
  ];

  const visibleTypes = showAllTypes ? carTypes : carTypes.slice(0, 6);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <h1
        className="text-4xl md:text-6xl text-center m-8 p-8 text-white "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Choose by Car <spanc className="text-gradient">Type:</spanc>
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 m-8"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {visibleTypes.map((type) => (
          <Link
            key={type.id}
            href={`/carTypes/${type.name}`}
            className="border p-2 sm:p-4 flex flex-col justify-start items-center bg-white shadow-2xl shadow-cyan-500 rounded-2xl h-32 md:h-36 object-contain m-2" // Changed justify-center to justify-start
          >
            <div
              className="h-24 sm:h-28"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <Image
                src={`/carTypes/${type.id}.png`}
                width={200}
                height={200}
                alt={type.alt}
                className="object-contain"
              />
            </div>
            <p className="text-center text-cyan-800 flex-grow">{type.name}</p>{" "}
            {/* Added flex-grow */}
          </Link>
        ))}
      </div>
      {!showAllTypes && (
        <div
          className="flex justify-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <button
            onClick={() => setShowAllTypes(true)}
            className="btn bg-white text-cyan-600 rounded mb-32"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default CarTypes;
