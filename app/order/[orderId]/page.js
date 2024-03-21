"use client";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import { AiOutlineSend } from "react-icons/ai";
import { useForm, ValidationError } from "@formspree/react";
import { FaSpinner, FaPhoneAlt, FaMapMarker } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { toast } from "react-toastify";

const ViewOrderId = ({ params }) => {
  const { orderId } = params;
  const [orderDetails, setOrderDetails] = useState(null);
  const send = <AiOutlineSend className="inline self-center text-cyan-800" />;
  const spinner = <FaSpinner className="fa-spin inline" />;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState(send);
  const [state, handleSubmit] = useForm("xvoegepb");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDelivery(spinner);

    try {
      const res = await fetch("https://formspree.io/f/mdoqlpwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!orderId) {
          console.error("Order ID is not provided.");
          return;
        }

        const orderRef = doc(db, "cars", orderId);
        const docSnapshot = await getDoc(orderRef);

        if (docSnapshot.exists()) {
          const orderData = {
            id: docSnapshot.id,
            ...docSnapshot.data(),
          };
          setOrderDetails(orderData);
        } else {
          console.log("No such order found!");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchData();
  }, [orderId]);

  return (
    <div className="text-cyan-50 m-8 md:m-32">
      {orderDetails ? (
        <div>
          <h1>Order Details</h1>
          <p>Order ID: {orderDetails.carName}</p>
          <p>Please give your name and phone number</p>
          <form
            onSubmit={handleFormSubmit}
            className="my-10 text-cyan-950  text-sm lg:text-md grid grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-cyan-700 "
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
            <button
              type="submit"
              className="mx-auto btn w-fit self-center col-span-2 hover:scale-105 duration-150 "
              disabled={delivery === spinner}
            >
              Place Order {delivery}
            </button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewOrderId;
