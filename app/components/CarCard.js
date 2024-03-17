import React from "react";
import Link from "next/link";

const CarCard = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg transform transition-transform hover:scale-105 h-full">
      <div className="h-72">
        {" "}
        {/* Fixed height */}
        {/* Image div starts */}
        {car.imageUrls && car.imageUrls.length > 0 && (
          <div className="h-full overflow-hidden rounded-md mb-2">
            <img
              src={car.imageUrls[1]}
              alt="Car"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        {/* Image div ends */}
      </div>
      {/* Details div starts */}
      <div className="flex flex-col justify-center items-center sm:mt-4">
        <strong className="mb-2">{car.carName}</strong>
        <p className="mb-2 text-sm">
          Make: {car.makeMonth} {car.makeYear}
        </p>
        <strong className="mb-2">Price: {car.price} Lakhs</strong>
        <div className="mt-4">
          <Link
            href={{
              pathname: `/viewCars/${car.id}`,
            }}
            className="btn"
          >
            See Details
          </Link>
        </div>
      </div>
      {/* Details div ends */}
    </div>
  );
};

export default CarCard;
