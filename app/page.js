import HeroSlider from "./components/HeroSlider";
import Address from "./components/Address";
import SoldCars from "./components/SoldCars";
import Brands from "./components/Brands";
import CarsHorizontalScroll from "./components/CarsHorizontalScroll";
import Image from "next/image";
import CarTypes from "./components/CarTypes";
import Search from "./components/Search";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <div className="">
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[20%] h-[25%] top-60 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[20%] h-[20%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[20%] h-[40%] left-80 bottom-60 blue__gradient" />
        {/* gradient end */}
        <Search />
        <Hero />
        {/* <div className=" my-8 rounded-2xl w-40 md:w-80 flex justify-center mx-auto p-8 bg-white shadow-2xl shadow-cyan-500">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
            loading="lazy"
          />
        </div> */}
        <div>
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
