import React, { useState } from "react";

const CarDetailCard = ({ carDetails }) => {
  const [selectedImage, setSelectedImage] = useState(
    carDetails && carDetails.imageUrls && carDetails.imageUrls.length > 0
      ? carDetails.imageUrls[0]
      : null
  );

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-10">
      {/* Image div outside the card */}
      <div className="w-full md:w-1/2 h-96 bg-gray-200 mb-4 md:mr-8 md:mb-0">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Car"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-96 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 perspective-1000 flex flex-col">
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
              <p>Ran: {carDetails.ran}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* Display other images with horizontal scroll */}
        <div className="overflow-x-auto p-4">
          {carDetails &&
            carDetails.imageUrls &&
            carDetails.imageUrls.length > 1 && (
              <div className="flex space-x-4">
                {carDetails.imageUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Car ${index + 1}`}
                    className={`w-24 h-24 object-cover rounded-lg cursor-pointer ${
                      selectedImage === url ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => handleImageClick(url)}
                  />
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
