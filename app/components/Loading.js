import { FaCar } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 z-50">
      <div className="animate-spin text-teal-600">
        <FaCar size={50} />
      </div>
    </div>
  );
};

export default Loading;
