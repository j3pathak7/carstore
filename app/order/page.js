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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center heading m-8 lg:m-16">
        <div>Your Order Has Been Placed</div>

        <Link className="btn w-56 md:w-80 my-8 mx-auto" href={"/viewCars"}>
          View More Cars
        </Link>
        <Address />
      </div>
    </div>
  );
};

export default Page;
