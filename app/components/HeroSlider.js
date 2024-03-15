"use client";
import React, { useState } from "react";
import "@/app/style/HeroSlider.css";
import Image from "next/image";
import Link from "next/link";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "slide1",
      heading: "Welcome to The Car Store",
      subHeading: "We Provide You Better Price",
      description: "We provide you expensive brand car at just a price.",
      imageUrl: "/car1.jpeg",
    },
    {
      id: "slide2",
      heading: "Welcome to The Car Store",
      subHeading: "We Provide You Better Quality",
      description: "We provide qualityful branded car.",
      imageUrl: "/car2.jpeg",
    },
    {
      id: "slide3",
      heading: "Welcome to The Car Store",
      subHeading: "We Provide You Better Service",
      description: "We provide you better services.",
      imageUrl: "/car3.jpeg",
    },
  ];

  const goToPrevSlide = () => {
    const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevSlideIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlideIndex);
  };

  return (
    <div className="hero-slider">
      <div className="lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px] mx-auto px-2 h-full">
        <div className="w-full lg:w-2/3 xl:w-1/2 h-full">
          <div className="carousel h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item d-flex justify-start items-center relative h-full w-full ${
                  index === currentSlide ? "" : "hidden"
                }`}
              >
                <div className="slider-content p-5 md:p-12">
                  <h1 className="text-base md:text-lg md:font-semibold tracking-widest my-3 text-teal-400">
                    {slide.heading}
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-semibold text-white">
                    We Provide You{" "}
                    <p className="text-teal-400 font-bold">
                      {slide.subHeading}
                    </p>{" "}
                  </h1>
                  <p className="text-white text-lg md:text-xl font-thin my-5">
                    {slide.description}
                  </p>
                  <Link href="/viewCars">
                    <button
                      className="btn bg-white  text-teal-600 mb-5"
                      onClick={() => console.log("Explore Cars clicked")}
                    >
                      Explore Cars
                    </button>
                  </Link>
                </div>
                <div className="absolute flex justify-start w-full pl-5 md:pl-12 transform -translate-y-1/2 left-0 bottom-2 md:bottom-28">
                  <button
                    className="btn btn-controll rounded-none mr-3 text-white"
                    onClick={goToPrevSlide}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-controll rounded-none mr-3 text-white"
                    onClick={goToNextSlide}
                  >
                    ❯
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="slider-img">
        <Image
          key={currentSlide} // Ensure Image component re-renders when currentSlide changes
          src={slides[currentSlide].imageUrl}
          width={500}
          height={500}
          loading="lazy"
          alt="Picture of the author"
          className="object-cover w-full h-full" // Fill the container height while maintaining aspect ratio
        />
      </div>
    </div>
  );
};

export default HeroSlider;
