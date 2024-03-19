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
      <section className="h-screen flex flex-col justify-center items-cente">
        <div className="container mx-auto">
          <div className="lg:h-[25rem] flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4 flex flex-col justify-center space-y-5 my-5">
              <h1 className="text-3xl font-semibold text-teal-500">About Us</h1>
              <p className="leading-relaxed text-teal-50 pr-8">
                Welcome to The Car Store, your premier destination for
                top-quality, pre-owner cars. At The Car Store, we redefine the
                concept of pre-owned vehicles by offering an exceptional
                selection of next-to-new cars at unbeatable prices. Our mission
                is to provide our customers with the confidence and satisfaction
                of purchasing a vehicle that looks and feels just like new,
                without the hefty price tag. With a commitment to excellence and
                a dedication to customer service, we strive to exceed your
                expectations at every turn. Experience the difference with The
                Car Store, where premium quality meets affordability.
              </p>
            </div>
            <div className="lg:w-1/2 border">
              <Image
                src="/aboutCarStore.jpeg"
                width={800}
                height={300}
                alt="Hotel View"
                className="object-cover rounded-2xl h-full shadow-2xl shadow-teal-500 "
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
