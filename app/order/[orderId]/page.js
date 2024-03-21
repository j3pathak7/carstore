"use client";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc, collection, addDoc } from "firebase/firestore";
import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";

const ViewOrderId = ({ params }) => {
  const { orderId } = params;
  const [orderDetails, setOrderDetails] = useState(null);
  const send = <AiOutlineSend className="inline self-center text-cyan-800" />;
  const spinner = <FaSpinner className="fa-spin inline" />;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [delivery, setDelivery] = useState(send);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!orderId) {
          console.error("Order ID is not provided.");
          return;
        }

        const orderRef = doc(db, "cars", orderId); // Assuming order details are stored in the "cars" collection (change if needed)
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
      const orderData = {
        orderId, // Include orderId in the order data
        carName: orderDetails.carName, // Include carName from orderDetails
        name,
        phone,
      };

      const orderRef = collection(db, "orders");
      const newOrder = await addDoc(orderRef, orderData);

      alert("Your order has been placed!");
      toast.success("Order placed successfully with ID: " + newOrder.id);

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
        <div>
          <h1>Order Details</h1>
          <p>
            Order ID: {orderDetails.carName} (replace with relevant field)
          </p>{" "}
          {/* Update based on your data structure */}
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
