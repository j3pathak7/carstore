"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCar,
  FaCalendarAlt,
  FaPalette,
  FaCog,
  FaMoneyBillWave,
  FaWrench,
  FaShieldAlt,
  FaExchangeAlt,
  FaHandHoldingUsd,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Loading from "./Loading";

const CarDetailCard = ({ carDetails, onGoBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);

  useEffect(() => {
    if (carDetails && carDetails.imageUrls && carDetails.imageUrls.length > 0) {
      // Load the selected image immediately
      setSelectedImage(carDetails.imageUrls[0]);

      // Defer loading other images
      setOtherImages(carDetails.imageUrls.slice(0));
    }
  }, [carDetails]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-10 bg-white">
      {/* Image div and horizontal scroll */}
      <div className="w-full md:w-2/3 flex flex-col items-center">
        {/* Image div outside the card */}
        <div className="w-full md:w-2/3 md:h-96 mb-2 md:mb-0">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Car"
              width={500}
              height={500}
              className="w-full h-full object-cover md:object-contain"
              priority={true}
            />
          )}
        </div>
        {/* Display other images with horizontal scroll */}
        <div className="w-full md:w-96 bg-white shadow-2xl rounded-lg overflow-x-auto p-4">
          {otherImages.length > 0 && (
            <div className="flex space-x-4">
              {otherImages.map((url, index) => (
                <Image
                  key={index}
                  width={500}
                  height={500}
                  src={url}
                  alt={`Car ${index + 2}`}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(url)}
                  priority={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Car details card */}
      <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-2xl overflow-hidden ">
        {/* Car details inside the card */}
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2 text-teal-800">Car Details</h1>
          {carDetails ? (
            <div>
              <p>
                <FaCar className="inline mr-2" />
                Car Name:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.carName}
                </span>
              </p>
              <p>
                <FaCar className="inline mr-2" />
                Car Brand:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.carBrand}
                </span>
              </p>
              <p>
                <FaCalendarAlt className="inline mr-2" />
                Make Year:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.makeYear}
                </span>
              </p>
              <p>
                <FaCalendarAlt className="inline mr-2" />
                Make Month:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.makeMonth}
                </span>
              </p>
              <p>
                <FaPalette className="inline mr-2" />
                Colour:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.colour}
                </span>
              </p>
              <p>
                <FaCog className="inline mr-2" />
                Transmission:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.transmission}
                </span>
              </p>
              <p>
                <FaCog className="inline mr-2" />
                Type:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.type}
                </span>
              </p>
              <p>
                <FaMoneyBillWave className="inline mr-2" />
                Price:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.price} Lakhs
                </span>
              </p>
              <p>
                <FaWrench className="inline mr-2" />
                Service History:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.serviceHistory}
                </span>
              </p>
              <p>
                <FaShieldAlt className="inline mr-2" />
                Insurance:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.insurance}
                </span>
              </p>
              <p>
                <FaExchangeAlt className="inline mr-2" />
                Exchange:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.exchange}
                </span>
              </p>
              <p>
                <FaHandHoldingUsd className="inline mr-2" />
                Finance:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.finance}
                </span>
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-2" />
                Registration Place:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.registrationPlace}
                </span>
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-2" />
                Registration Transfer:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.registrationTransfer}
                </span>
              </p>
              <p>
                <FaCar className="inline mr-2" />
                Ran:{" "}
                <span className="text-teal-900 font-bold">
                  {carDetails.ran} kms
                </span>
              </p>
            </div>
          ) : (
            <div>
              <Loading />
            </div>
          )}

          {/* Go back button */}
          <div>
            <Link href="/contact" className="btn my-4 md:w-1/2 mx-auto">
              Buy
            </Link>
            <button className="btn my-4 md:w-1/2 mx-auto">
              <Link href="/viewCars">Go Back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailCard;
