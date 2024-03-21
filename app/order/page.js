"use client";
import Link from "next/link";
import { useEffect } from "react";
import Confetti from "js-confetti";

const Page = () => {
  // Function to trigger confetti effect
  useEffect(() => {
    const confetti = new Confetti();
    confetti.addConfetti();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center heading">
        <div>Your Order Has Been Placed</div>

        <Link className="btn w-56 md:w-80 my-8 mx-auto" href={"/viewCars"}>
          View More Cars
        </Link>
      </div>
    </div>
  );
};

export default Page;
