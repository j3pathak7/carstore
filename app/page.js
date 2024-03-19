import HeroSlider from "./components/HeroSlider";

import CarCards from "./components/CarCardAll";
import Address from "./components/Address";
import SoldCars from "./components/SoldCars";
import Brands from "./components/Brands";
import Cars from "./components/Cars";
import CarsHorizontalScroll from "./components/CarsHorizontalScroll";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <div className=" mt-8 shadow-2xl rounded-2xl w-40 md:w-80 flex justify-center mx-auto p-8 bg-white">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <CarsHorizontalScroll />
        <Brands />
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
