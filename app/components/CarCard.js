import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaGasPump } from "react-icons/fa";

const CarCard = ({ car }) => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="p-4 bg-white rounded-2xl shadow-2xl shadow-teal-500 transform transition-transform hover:scale-105 h-full flex flex-col z-50"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div>
        {/* Image div starts */}
        {car.imageUrls && car.imageUrls.length > 0 && (
          <div className="h-40  md:h-36 lg:h-56 overflow-hidden rounded-md mb-2">
            <Image
              src={car.imageUrls[1]}
              alt="Car"
              loading="lazy"
              width={500}
              height={500}
              className="w-full object-contain"
            />
          </div>
        )}
        {/* Image div ends */}

        {/* Details div starts */}
        <div className="sm:mt-4">
          <strong className="mb-2 flex justify-center text-center">
            {car.carName}
          </strong>
          <div className="flex justify-center mb-2">
            <FaCalendarAlt className="mr-1" />
            <p className="text-sm">
              Make: {car.makeMonth} {car.makeYear}
            </p>
          </div>
          <div className="flex justify-center mb-2">
            <FaGasPump className="mr-1" />
            <p className="text-sm">Fuel Type: {car.type}</p>
          </div>
          <strong className="text-lg mb-2 flex justify-center">
            Price: {car.price} Lakhs
          </strong>
        </div>
        {/* Details div ends */}
      </div>
      {/* Button */}
      <div className="mt-auto">
        <Link
          href={{
            pathname: `/viewCars/${car.id}`,
          }}
          className="btn mb-4 md:mx-16"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
