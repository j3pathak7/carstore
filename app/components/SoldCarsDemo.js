"use client";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Glide from "@glidejs/glide";

const CarouselControlsInside = () => {
  const [soldCars, setSoldCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoldCars = async () => {
      try {
        const soldCarsCollection = collection(db, "soldCars");
        const querySnapshot = await getDocs(soldCarsCollection);
        const carsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSoldCars(carsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sold cars:", error);
        setLoading(false);
      }
    };

    fetchSoldCars();
  }, []);

  useEffect(() => {
    if (!loading) {
      const slider = new Glide(".glide-01", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classNames: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [loading]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Our Sold Cars</h1>
      <div className="glide-01 relative w-full p-8">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {soldCars.map((car) => (
              <li key={car.id}>
                <img
                  src={car.imageUrls}
                  alt={`Car ${car.id}`}
                  className="m-auto h-full md:h-96" // Set height to 48px (300px)
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    </div>
  );
};

export default CarouselControlsInside;
