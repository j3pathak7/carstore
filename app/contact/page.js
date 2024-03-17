"use client";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

function ContactUs() {
  const send = <AiOutlineSend className="inline self-center text-teal-800" />;
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
      const res = await fetch("https://formspree.io/f/xvoegepb", {
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
    <div className="bg-white m-8">
      <h1 className="text-center heading">
        <span className="text-teal-900 py-">Contact</span> Us
      </h1>
      <div className="flex py-5">
        <div className="lg:w-1/2 lg:p-10">
          <div className="space-y-2">
            <h1 className="subheading">Get in touch</h1>
            <p>
              Feel free to reach out to us for any inquiries or assistance. We
              value your input and are here to help.
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="my-10 text-sm lg:text-md grid grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-teal-700 "
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="focus:outline-none focus:border-teal-800 bg-white"
            />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
              className="focus:outline-none focus:border-teal-800 bg-white"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Email"
              required
              className="focus:outline-none focus:border-teal-800 bg-white"
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              required
              className="focus:outline-none focus:border-teal-800 bg-white"
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
              placeholder="Message"
              required
              className="col-span-2 focus:outline-none focus:border-teal-800 h-32 bg-white"
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
        <div className="hidden self-center lg:block w-1/2 p-10">
          <div className="card">
            <img src="/contact.png" alt="Contact Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
