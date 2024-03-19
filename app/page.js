"use client";
import HeroSlider from "./components/HeroSlider";
import { useEffect } from "react";
import Address from "./components/Address";
import SoldCars from "./components/SoldCars";
import Brands from "./components/Brands";
import Cars from "./components/Cars";
import CarsHorizontalScroll from "./components/CarsHorizontalScroll";
import Image from "next/image";
import CarTypes from "./components/CarTypes";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <main className="">
      <div className="">
        <div
          className=" my-16 rounded-2xl w-40 md:w-80 flex justify-center mx-auto p-8 bg-white shadow-2xl shadow-teal-500"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <CarsHorizontalScroll />
        </div>
        <Brands />
        <CarTypes />
        {/* <Cars /> */}
        {/* <CarCards /> */}

        <HeroSlider />
        <div className="lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2"></div>
        <Address />

        <SoldCars />
      </div>
    </main>
  );
}
