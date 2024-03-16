// CarDetailCard.js
import React from "react";

const CarDetailCard = ({ carDetails }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-10">
      {/* Image div outside the card */}
      <div className="w-full md:w-1/2 h-full bg-gray-200 mb-4 md:mr-8 md:mb-0">
        {carDetails &&
          carDetails.imageUrls &&
          carDetails.imageUrls.length > 0 && (
            <img
              src={carDetails.imageUrls[0]}
              alt="Car"
              className="w-full h-full object-cover"
            />
          )}
      </div>
      <div className="w-full md:w-96 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 perspective-1000 flex">
        {/* Car details inside the card */}
        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">Car Details</h1>
          {carDetails ? (
            <div>
              <p>Car Name: {carDetails.carName}</p>
              <p>Car Brand: {carDetails.carBrand}</p>
              <p>Model: {carDetails.model}</p>
              <p>Make Year: {carDetails.makeYear}</p>
              <p>Make Month: {carDetails.makeMonth}</p>
              <p>Colour: {carDetails.colour}</p>
              <p>Transmission: {carDetails.transmission}</p>
              <p>Type: {carDetails.type}</p>
              <p>Price: {carDetails.price} Lakhs</p>
              <p>Service History: {carDetails.serviceHistory}</p>
              <p>Insurance: {carDetails.insurance}</p>
              <p>Exchange: {carDetails.exchange}</p>
              <p>Finance: {carDetails.finance}</p>
              <p>Registration Place: {carDetails.registrationPlace}</p>
              <p>Registration Transfer: {carDetails.registrationTransfer}</p>
              <p>Tyre Condition: {carDetails.tyreCondition}</p>
              <p>Battery Condition: {carDetails.batteryCondition}</p>
              <p>Accidental: {carDetails.accidential}</p>
              <p>Warranty: {carDetails.warranty}</p>
              <p>Flooded: {carDetails.flooded}</p>
              <p>Certified: {carDetails.certified}</p>
              <p>Ran: {carDetails.ran}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
