import { FaCarSide } from "react-icons/fa";
import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-teal-950 to-black z-50">
      {/* <div className="circle-animation"> */}
      {/* <FaCarSide size={50} className="car" /> */}
      <Image
        src="/loading.gif"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      {/* </div> */}
    </div>
  );
};

export default Loading;
