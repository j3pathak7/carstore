import Link from "next/link";
import Image from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Address from "../components/Address";
import HeroSlider from "../components/HeroSlider";

function About() {
  const angle = <AiOutlineDoubleRight className="inline" />;

  return (
    <div>
      <HeroSlider />
      <section className="h-screen flex flex-col justify-center items-cente bg-white">
        <div className="container mx-auto">
          <div className="lg:h-[25rem] flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4 flex flex-col justify-center space-y-5 my-5">
              <h1 className="text-3xl font-semibold text-teal-800">About Us</h1>
              <p className="leading-relaxed">
                Welcome to The Car Store, your premier destination for quality
                pre-owned cars that are next to new at the most affordable
                prices. At The Car Store, we redefine the concept of pre-owned
                cars by providing you with vehicles that are meticulously
                inspected, refurbished, and maintained to ensure they meet the
                highest standards of quality and reliability.
              </p>
              <Link
                href="/about"
                className="font-medium text-teal-800 flex items-center"
              >
                Learn More {angle}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/about.png"
                width={800}
                height={300}
                alt="Hotel View"
                className="object-cover rounded-lg h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Address />
    </div>
  );
}

export default About;
