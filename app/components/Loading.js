import Image from "next/image";
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-75 z-50">
      <Image src="/loading.gif" alt="Loading" width={500} height={500} />
    </div>
  );
};

export default Loading;
