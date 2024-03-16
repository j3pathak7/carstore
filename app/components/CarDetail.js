import React, { useState, useEffect } from "react";

const CarDetailCard = ({ carDetails }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);

  useEffect(() => {
    if (carDetails && carDetails.imageUrls && carDetails.imageUrls.length > 0) {
      // Load the selected image immediately
      setSelectedImage(carDetails.imageUrls[0]);

      // Defer loading other images
      setOtherImages(carDetails.imageUrls.slice(1));
    }
  }, [carDetails]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-10">
      {/* Image div and horizontal scroll */}
      <div className="w-full md:w-2/3 flex flex-col items-center">
        {/* Image div outside the card */}
        <div className="w-full md:w-2/3 md:h-96 mb-2 md:mr-8 md:mb-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Car"
              className="w-full h-full object-cover md:object-contain"
            />
          )}
        </div>
        {/* Display other images with horizontal scroll */}
        <div className="w-full md:w-96 bg-white shadow-md rounded-lg overflow-x-auto p-4">
          {otherImages.length > 0 && (
            <div className="flex space-x-4">
              {otherImages.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Car ${index + 2}`}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(url)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Car details card */}
      <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 perspective-1000">
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
      </div>
    </div>
  );
};

export default CarDetailCard;
