// CarCard.js

import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg transform transition-transform hover:scale-105">
      {car.imageUrls && car.imageUrls.length > 0 && (
        <div className="h-80 overflow-hidden rounded-md mb-2">
          <img
            src={car.imageUrls[0]}
            alt="Car"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      )}
      <strong className="mb-2 flex justify-center">{car.carName}</strong>
      <p className="mb-2 text-sm flex justify-center">
        Make: {car.makeMonth} {car.makeYear}
      </p>
      <strong className="mb-2 flex justify-center">
        Price: {car.price} Lakhs
      </strong>
    </div>
  );
};

export default CarCard;
