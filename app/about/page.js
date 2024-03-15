import Link from "next/link";
import Image from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Address from "../components/Address";

function About() {
  const angle = <AiOutlineDoubleRight className="inline" />;

  return (
    <div>
      <section className="h-screen flex flex-col justify-center items-cente bg-white">
        <div className="container mx-auto">
          <div className="lg:h-[25rem] flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4 flex flex-col justify-center space-y-5 my-5">
              <h1 className="text-3xl font-semibold text-teal-800">About Us</h1>
              <p className="leading-relaxed">
                Welcome to our luxurious hotel, where comfort meets elegance.
                Indulge in our spacious and cozy rooms, designed to provide
                ultimate relaxation. Delight your taste buds with our exquisite
                culinary offerings, accompanied by impeccable service that will
                exceed your expectations.
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
