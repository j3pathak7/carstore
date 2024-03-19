import { FaCarSide } from "react-icons/fa";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-teal-950 to-black z-50">
      <div className="circle-animation">
        <FaCarSide size={50} className="car" />
      </div>
    </div>
  );
};

export default Loading;
