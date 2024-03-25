import { FaCarSide } from "react-icons/fa";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-br from-slate-950 from-25% to-black z-50">
      <div
        className="self-center text-4xl lg:text-6xl text-gradient"
        style={{ textTransform: "uppercase" }}
      >
        <span style={{ fontSize: "1.5em" }}>T</span>
        <span style={{ fontSize: "1em", marginRight: "0.3em" }}>HE</span>
        <span style={{ fontSize: "1.5em" }}>C</span>
        <span style={{ fontSize: "1em", marginRight: "0.3em" }}>AR</span>
        <span style={{ fontSize: "1.5em" }}>S</span>
        <span style={{ fontSize: "1em", marginRight: "0.3em" }}>TORE</span>
      </div>
    </div>
  );
};

export default Loading;
