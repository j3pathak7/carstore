import HeroSlider from "./components/HeroSlider";

import CarCards from "./components/CarCardAll";
import Address from "./components/Address";
import SoldCars from "./components/SoldCars";

export default function Home() {
  return (
    <main className="bg-white">
      <div className=" ">
        <CarCards />

        <HeroSlider />
        <div className="lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2"></div>
        <Address />

        <SoldCars />
      </div>
    </main>
  );
}
