"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

function Address() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="md:p-16 p-4">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Where to Find Us */}
        <div
          className="mb-8 lg:mb-0"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="heading">
            <span className="text-cyan-800">Where</span> to{" "}
            <span className="text-cyan-800"> Find</span> Us
          </h1>
          <div className="mx-auto py-10 px-5 my-10 shadow-2xl rounded-2xl shadow-cyan-500  justify-center space-y-5 bg-white">
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
              <FaPhoneAlt className="self-center text-cyan-800" />
              <div className="flex gap-2">
                <Link href="tel:+918135843184">8135843184</Link>,
                <Link href="tel:+919706713213">9706713213</Link>
              </div>
            </div>
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
              {" "}
              {/* Adjust text size for small devices */}
              <FaMapMarker className="self-center text-cyan-800" />
              <Link
                href="https://maps.app.goo.gl/JTr2ENMLRrEURNL46"
                target="_blank"
                rel="noopener noreferrer"
              >
                GANESHPARA, AK Dev Rd, Guwahati, Assam 781025
              </Link>
            </div>
            <div className="flex gap-4 text-sm md:text-base lg:text-lg">
              {" "}
              {/* Adjust text size for small devices */}
              <AiFillMail className="self-center text-cyan-800" />
              <Link href="mailto:thecarstoreguwahati@gmail.com">
                thecarstoreguwahati@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Map */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14327.279722769998!2d91.7247258!3d26.1374136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b3fd877d611%3A0x882e158659361d36!2sTHE%20CAR%20STORE!5e0!3m2!1sen!2sin!4v1710527651717!5m2!1sen!2sin"
            className="w-full h-96 rounded-3xl p-6 md:p-8 mb-8"
            title="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Address;
