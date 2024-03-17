"use client";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import CarDetailCard from "@/app/components/CarDetail";

const page = ({ params }) => {
  const { carId } = params;
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!carId) {
          console.error("Car ID is not provided.");
          return;
        }

        const carRef = doc(db, "cars", carId);
        const docSnapshot = await getDoc(carRef);

        if (docSnapshot.exists()) {
          const carData = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
          };
          setCarDetails(carData);
        } else {
          console.log("No such car found!");
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchData();
  }, [carId]);

  return (
    <div className="bg-gray-100">
      <CarDetailCard carDetails={carDetails} />
    </div>
  );
};

export default page;
