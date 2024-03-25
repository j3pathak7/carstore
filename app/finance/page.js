"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Banks = () => {
  const [showAllBanks, setShowAllBanks] = useState(false);

  const banks = [
    {
      id: "tata-capital",
      name: "Tata Capital LTD",
      alt: "Tata Capital LTD Logo",
    },
    { id: "bajaj-finance", name: "Bajaj Finance", alt: "Bajaj Finance Logo" },
    { id: "indusind-bank", name: "Indusind Bank", alt: "Indusind Bank Logo" },
    { id: "yes-bank", name: "Yes Bank", alt: "Yes Bank Logo" },
    { id: "hdfc-bank", name: "HDFC Bank", alt: "HDFC Bank Logo" },
    { id: "idfc-bank", name: "IDFC Bank", alt: "IDFC Bank Logo" },
    { id: "chola", name: "Chola", alt: "Chola Logo" },
    {
      id: "mahindra-finance",
      name: "Mahindra Finance",
      alt: "Mahindra Finance Logo",
    },
    { id: "hero-finance", name: "Hero Finance", alt: "Hero Finance Logo" },
  ];

  const visibleBanks = showAllBanks ? banks : banks.slice(0, 6);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSeeLessClick = () => {
    setShowAllBanks(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <h1 className="text-4xl md:text-6xl text-white text-center m-8 sm:m-16 p-8">
        We provide the following{" "}
        <span className="text-gradient">Financing </span>options:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-2 sm:mx-10 md:mx-20 lg:mx-40 m-8 ">
        {visibleBanks.map((bank) => (
          <div key={bank.id} className="flex justify-center">
            <Image
              src={`/finance/${bank.id}.png`}
              width={250}
              height={250}
              alt={bank.alt}
              className="bg-white shadow-2xl shadow-teal-500 object-contain h-36 rounded-2xl m-2"
            />
          </div>
        ))}
      </div>
      {!showAllBanks && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAllBanks(true)}
            className="btn bg-white text-teal-600 rounded mb-32"
          >
            See More
          </button>
        </div>
      )}
      {showAllBanks && (
        <div className="flex justify-center">
          <button
            onClick={handleSeeLessClick}
            className="btn bg-white text-teal-600 rounded mb-32"
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Banks;
