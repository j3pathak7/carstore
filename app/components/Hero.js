// Hero.jsx

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" bg-cover bg-no-repeat bg-center py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-16">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-white leading-tight">
              Find Your <span className="text-gradient">Perfect Car</span>
            </h1>
            <p className="text-gray-300 text-xl mt-4">
              Huge selection, great prices, hassle-free buying.
            </p>
            <Link href={"/viewCars"}>
              <button className="btn btn-primary mt-8">Browse Inventory</button>
            </Link>
          </div>
          <div className=" my-8 rounded-2xl w-40 md:w-80 flex justify-center mx-auto p-8 bg-white shadow-2xl shadow-cyan-500">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="Picture of the author"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
