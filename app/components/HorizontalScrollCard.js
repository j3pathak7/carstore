import React from "react";
import { FaGasPump } from "react-icons/fa";
import Link from "next/link"; // Importing the Link component from Next.js

const HorizontalScrollCard = ({ car }) => {
  return (
    <Link
      href={`/viewCars/${car.id}`}
      className="flex p-4 bg-white rounded-2xl shadow-2xl cursor-pointer"
      style={{ width: "300px", height: "150px" }}
    >
      {/* Image Section */}
      {car.imageUrls && car.imageUrls.length > 0 && (
        <img
          src={car.imageUrls[1]} // Displaying the second image from the imageUrls array
          alt="Car"
          className="w-36 h-auto object-contain mr-4" // Setting width to 36px and allowing the image to contain within its container
        />
      )}

      {/* Details Section */}
      <div className="flex flex-col justify-between text-right">
        {/* Flex container for details */}
        <div>
          {/* Details about the car */}
          <div className="text-sm mb-2 text-teal-800">{car.carName}</div>{" "}
          {/* Car name with smaller font size and margin bottom */}
          <div className="text-sm flex justify-end items-center">
            {" "}
            {/* Flex container for fuel type */}
            <span className="mr-1">{car.type}</span> {/* Type of fuel */}
            <FaGasPump /> {/* Gas Pump icon */}
          </div>
          <div className="font-bold text-teal-800">₹ {car.price} lakhs</div>{" "}
          {/* Car price in bold with teal color */}
        </div>
        <div>{/* Additional details can be added here */}</div>{" "}
      </div>
    </Link>
  );
};

export default HorizontalScrollCard;
