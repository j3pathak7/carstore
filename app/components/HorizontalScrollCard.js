import React from "react";
import { FaGasPump } from "react-icons/fa";
import Link from "next/link"; // Importing the Link component from Next.js
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const HorizontalScrollCard = ({ car }) => {
  return (
    <Link
      href={`/viewCars/${car.id}`}
      className="flex p-4 bg-white rounded-2xl shadow-2xl cursor-pointer shadow-cyan-500"
      style={{ width: "300px", height: "150px" }}
    >
      {/* Image Section */}
      {car.imageUrls && car.imageUrls.length > 0 && (
        <Image
          src={car.imageUrls[1]}
          width={200} // Displaying the second image from the imageUrls array
          height={200}
          alt="Car"
          className="w-36 h-auto object-contain mr-4" // Setting width to 36px and allowing the image to contain within its container
        />
      )}

      {/* Details Section */}
      <div className="flex flex-col justify-between text-right">
        {/* Flex container for details */}
        <div>
          {/* Details about the car */}
          <div className="text-sm mb-2 text-cyan-800">{car.carName}</div>{" "}
          {/* Car name with smaller font size and margin bottom */}
          <div className="text-sm flex justify-end items-center">
            {" "}
            {/* Flex container for fuel type */}
            <span className="mr-1">{car.type}</span> {/* Type of fuel */}
            <FaGasPump /> {/* Gas Pump icon */}
          </div>
          <div className="font-bold text-cyan-800">₹ {car.price} lakhs</div>{" "}
          {/* Car price in bold with cyan color */}
        </div>
        <div>{/* Additional details can be added here */}</div>{" "}
      </div>
    </Link>
  );
};

export default HorizontalScrollCard;
