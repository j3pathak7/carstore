import { FaCarSide } from "react-icons/fa";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-cyan-950 to-black z-50">
      {/* Remove circle-animation div if not needed */}
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
