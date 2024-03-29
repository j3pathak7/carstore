"use client";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { FaSpinner, FaPhoneAlt, FaMapMarker } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { toast } from "react-toastify";

function ContactUs() {
  const send = <AiOutlineSend className="inline self-center text-cyan-800" />;
  const spinner = <FaSpinner className="fa-spin inline" />;
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [delivery, setDelivery] = useState(send);
  const [state, handleSubmit] = useForm("xvoegepb");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDelivery(spinner);

    try {
      const res = await fetch("https://formspree.io/f/mayrdlpy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, subject, email, phone, message }),
      });

      const data = await res.json();
      if (data.ok) {
        alert("Your message has been sent!");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

      setDelivery(send);
    } catch (error) {
      toast.error("An error occurred while sending the message.");
      setDelivery(send);
    }
  };

  return (
    <div className=" m-8">
      <h1 className="text-center text-4xl md:text-6xl text-white">
        <span className="text-gradient py-8">Contact</span> Us
      </h1>
      <div className="flex flex-col lg:flex-row py-5">
        <div className="lg:w-1/2 lg:p-10">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl text-white">
              Where to
              <span className="text-gradient"> Find</span> Us
            </h1>
            <div className="mx-auto py-10 px-5 my-10 shadow-2xl rounded-2xl shadow-cyan-500 justify-center space-y-5 bg-white text-sm md:text-md">
              <div className="flex gap-4 text-sm md:text-base ">
                <FaPhoneAlt className="self-center text-cyan-800" />
                <div className="flex gap-2">
                  <a href="tel:+918135843184">8135843184</a>,
                  <a href="tel:+919706713213">9706713213</a>
                </div>
              </div>
              <div className="flex gap-4">
                <FaMapMarker className="self-center text-cyan-800" />
                <a
                  href="https://maps.app.goo.gl/JTr2ENMLRrEURNL46"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GANESHPARA, AK Dev Rd, Guwahati, Assam 781025
                </a>
              </div>
              <div className="flex gap-4">
                <AiFillMail className="self-center text-cyan-800" />
                <a href="mailto:thecarstoreguwahati@gmail.com">
                  thecarstoreguwahati@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:p-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl text-white">
              Get in <span className="text-gradient">touch</span>
            </h1>
            <p className=" text-dimWhite">
              Feel free to reach out to us for any inquiries or assistance. We
              value your input and are here to help.
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="my-10 text-sm lg:text-md grid grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-cyan-700 "
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name *"
              required
              className="focus:outline-none focus:border-cyan-800 bg-white"
            />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="focus:outline-none focus:border-cyan-800 bg-white"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Email"
              className="focus:outline-none focus:border-cyan-800 bg-white"
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone *"
              required
              className="focus:outline-none focus:border-cyan-800 bg-white"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <textarea
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message *"
              required
              className="col-span-2 focus:outline-none focus:border-cyan-800 h-32 bg-white"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="mx-auto btn w-fit self-center col-span-2 hover:scale-105 duration-150 "
              disabled={delivery === spinner}
            >
              Send Message {delivery}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
