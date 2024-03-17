"use client";
import React, { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import {
  FaMapMarker,
  FaSpinner,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

function Footer() {
  const suscriberMailContainer = useRef(null);
  const mail = <AiFillMail className="inline" />;
  const location = <FaMapMarker className="inline" />;
  const phone = <FaPhoneAlt className="inline" />;
  const spin = <FaSpinner className="fa-spin" />;
  const [load, setLoad] = useState(null);

  function Subscribe(e) {
    e.preventDefault();
    var mailProvided = suscriberMailContainer.current.value;
    var email = mailProvided.toLowerCase();
    setLoad(spin);
    try {
      fetch("/newsletter/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          if (data.success) {
            alert(
              "Thanks for suscribing!. We will let you know of any exclusive offers available"
            );
          } else {
            alert("The owner of this mail is already a suscriber.");
          }
          setLoad("");
          suscriberMailContainer.current.value = "";
        });
    } catch (err) {
      alert("Something went wrong.");
      console.log(err);
      setLoad("");
    }
  }

  useEffect(() => {
    Aos.init();
  });

  return (
    <footer
      data-aos="fade-down"
      data-aos-duration="2000"
      className="bg-sky-50 text-center py-[40px] text-gray-700"
    >
      <div className="container mx-auto px-[15px] md:px-[24px] lg:flex lg:justify-between">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:w-[65%]">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]"
          >
            <div className="font-bold mb-4 text-lg">More</div>
            <Link
              href="/about"
              className="boxuplink font-normal leading-[200%] text-sm"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="boxuplink font-normal leading-[200%] text-sm"
            >
              Contact Us
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]"
          >
            <Image
              src="/logo.png"
              width={120}
              height={120}
              alt="Picture of the author"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]"
          >
            <div className="font-bold mb-4 text-lg">Contact Details</div>
            <a
              href="https://maps.app.goo.gl/JTr2ENMLRrEURNL46"
              className="boxuplink font-normal leading-[200%] text-sm"
            >
              {location} &nbsp;GANESHPARA, AK Dev Rd, Guwahati, Assam 781025{" "}
            </a>
            <a
              href="tel:+919706713213"
              className="boxuplink font-normal leading-[200%] text-sm"
            >
              {phone} &nbsp;9706713213
            </a>
            <a
              href="mailto:thecarstoreguwahati@gmail.com"
              className="boxuplink font-normal leading-[200%] text-sm"
            >
              {mail} &nbsp;thecarstoreguwahati@gmail.com
            </a>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="md:flex md:justify-between md:items-center lg:flex-col"
          >
            <div className="social text-center md:text-start md:self-start">
              <div className="mb-[8px] font-bold text-[18px]">Reach Out</div>
              <div className="text-primary text-[23px]">
                <Link
                  href="https://www.facebook.com/p/The-Car-Store-Guwahati-100063880484633/"
                  className="inline-block"
                >
                  <FaFacebookF className="mr-[35px] md:mr-[45px]" />
                </Link>
                <Link
                  href="https://www.instagram.com/the_car_store_bharat_/"
                  className="inline-block"
                >
                  <FaInstagram className="mr-[35px] md:mr-[45px]" />
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=%2B918240688165"
                  className="inline-block"
                >
                  <FaWhatsapp className="mr-0" />
                </Link>
              </div>
            </div>
            <div className="news mt-[40px] md:mt-[0]">
              <div className="newsbox mb-[20px] max-w-[400px] md:max-w-[350px]"></div>
              <div className="text-center text-[#999999] test-sm">
                &copy; 2024 THE CAR STORE All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
