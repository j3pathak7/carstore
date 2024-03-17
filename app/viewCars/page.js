import React from "react";
import CarCards from "../components/CarCardAll";
import Cars from "../components/Cars";

const page = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <Cars />
        {/* <CarCards /> */}
      </div>
    </div>
  );
};

export default page;
