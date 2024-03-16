import React from "react";
import Link from "next/link";

const CarCard = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg transform transition-transform hover:scale-105">
      <div>
        {/* Image div starts */}
        {car.imageUrls && car.imageUrls.length > 0 && (
          <div className="h-80 overflow-hidden rounded-md mb-2">
            <img
              src={car.imageUrls[0]}
              alt="Car"
              loading="lazy"
              className="w-full object-contain"
            />
          </div>
        )}
        {/* Image div ends */}

        {/* Details div starts */}
        <div className="sm:mt-4">
          <strong className="mb-2 flex justify-center">{car.carName}</strong>
          <p className="mb-2 text-sm flex justify-center">
            Make: {car.makeMonth} {car.makeYear}
          </p>
          <strong className="mb-2 flex justify-center">
            Price: {car.price} Lakhs
          </strong>
          <div className="flex justify-center">
            <Link
              href={{
                pathname: `/viewCars/${car.id}`,
              }}
              className="mt-4 btn mb-4"
            >
              See Details
            </Link>
          </div>
        </div>
        {/* Details div ends */}
      </div>
    </div>
  );
};

export default CarCard;
