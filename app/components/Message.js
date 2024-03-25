import Link from "next/link";
import React from "react";

const Message = ({ resetFilters }) => {
  return (
    <div className="m-8 py-8">
      <p className="text-red-600  text-lg text-center mx-8">
        Apologies, but no cars of that type were found in our inventory.
      </p>
      <div className="flex justify-center m-8">
        <Link className="btn" href="/viewCars">
          View More Cars
        </Link>
      </div>
    </div>
  );
};

export default Message;
