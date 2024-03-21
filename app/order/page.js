"use client";
import Link from "next/link";
import { useEffect } from "react";
import Confetti from "js-confetti";
import Address from "../components/Address";

const Page = () => {
  // Function to trigger confetti effect
  useEffect(() => {
    const confetti = new Confetti();
    confetti.addConfetti();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    const scrollToTop = () => {
      const element = document.documentElement || document.body;
      element.scrollIntoView({ behavior: "smooth" });
    };

    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" heading m-8 lg:m-16">
        <div className="text-center">
          Your Order Has Been Placed. We will get back to you shortly.
        </div>

        <Link className="btn w-56 md:w-80 my-8 mx-auto" href={"/viewCars"}>
          View More Cars
        </Link>
        <Address />
      </div>
    </div>
  );
};

export default Page;
