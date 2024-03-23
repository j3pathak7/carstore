"use client";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc, collection, addDoc } from "firebase/firestore";
import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";

const ViewOrderId = ({ params }) => {
  const { orderId } = params;
  const [orderDetails, setOrderDetails] = useState(null);
  const send = <AiOutlineSend className="inline self-center text-cyan-800" />;
  const spinner = <FaSpinner className="fa-spin inline" />;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState(send);

  useEffect(() => {
    const scrollToTop = () => {
      const element = document.documentElement || document.body;
      element.scrollIntoView({ behavior: "smooth" });
    };

    scrollToTop();
  }, []);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDelivery(spinner);

    try {
      const currentDateTime = new Date();
      const orderData = {
        orderId,
        carName: orderDetails.carName,
        name,
        phone,
        imageUrl: orderDetails.imageUrls[1],
        // Store date and time separately
        submissionDate: currentDateTime.toLocaleDateString(), // Store date
        submissionTime: currentDateTime.toLocaleTimeString(), // Store time
      };

      const orderRef = collection(db, "orders");
      const newOrder = await addDoc(orderRef, orderData);

      toast.success("Order placed successfully with ID: " + newOrder.id);
      window.location.href = "/order";

      setName("");
      setPhone("");
      setDelivery(send);
    } catch (error) {
      toast.error("An error occurred while placing the order.");
      setDelivery(send);
    }
  };

  return (
    <div className="text-cyan-50 m-8 md:m-32">
      {orderDetails ? (
        <div className="text-sm md:text-lg">
          <h1 className="heading py-8">Order Details</h1>
          <div className="flex items-center">
            <Image
              src={orderDetails.imageUrls[1]}
              alt="Car"
              width={250}
              height={250}
              className="w-20 h-auto mr-4 rounded-md"
            />
            <p>
              Order Name:{" "}
              <span className="text-cyan-500">{orderDetails.carName}</span>
            </p>
          </div>
          <p className="py-8">Please provide your name and phone number:</p>
          <form
            onSubmit={handleFormSubmit}
            className="mt-8 mb-28 text-cyan-950  text-sm lg:text-md grid  grid-cols-2 gap-6 [&>*]:duration-150 [&>*]:border-2 [&>*]:py-3 [&>*]:px-4 [&>*]:rounded-lg [&>*]:border-cyan-700 "
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
