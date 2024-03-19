"use client";
import React, { useEffect, useState } from "react";
import reviews from "../utils/reviews.json";
import { AiFillStar } from "react-icons/ai";

function Reviews() {
  const star = <AiFillStar className="text-yellow-400 inline" />;
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [numberOfSlides, setNumberOfSlides] = useState(null);

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setNumberOfSlides(1);
    } else {
      setNumberOfSlides(2);
    }
  }

  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="mt-32 mb-64  mx-4 md:mx-32">
      <div className=" p-4 space-y-2 mb-8">
        <h1 className="heading">
          Our <span className="text-cyan-500">Reviews</span>
        </h1>
        <p className="desc text-cyan-50">What people say about us:</p>
      </div>

      <div
        className="flex justify-center"
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h1 className="text-cyan-700 font-semibold text-2xl  lg:text-4xl mb-4">
            {currentReview.name}
          </h1>
          <div className="flex items-center mb-4">
            <h1 className="text-slate-700 font-semibold text-2xl lg:text-3xl">
              {star} {star} {star} {star} {star}
            </h1>
            <svg
              className="w-8 h-8 ml-2 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
          <p className="text-slate-700 font-serif text-lg">
            {currentReview.review}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
