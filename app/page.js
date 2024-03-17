import HeroSlider from "./components/HeroSlider";
import AboutUs from "./components/AboutUs";
import CarCards from "./components/CarCardAll";
import Address from "./components/Address";
import SoldCars from "./components/SoldCars";
import CarCardsDemo from "./components/CarAllDemo";

export default function Home() {
  return (
    <main className="bg-white">
      <div className=" ">
        {/* <Hero /> */}
        <CarCards />
        {/* <CarCardsDemo /> */}
        <HeroSlider />
        <div className="lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2"></div>
        <Address />
        {/* <AboutUs /> */}
        <SoldCars />
      </div>
    </main>
  );
}
