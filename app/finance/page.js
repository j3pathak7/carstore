const Page = () => {
  // Sample car types data
  const carTypes = [
    { name: "Sedan", image: "sedan.jpg" },
    { name: "SUV", image: "suv.jpg" },
    { name: "MUV", image: "MUV.png" },
    { name: "Hatchback", image: "Hatchback.png" },
    { name: "Convertible", image: "convertible.jpg" },
    { name: "Truck", image: "truck.jpg" },
    { name: "Van", image: "van.jpg" },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-4">Car Types</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {carTypes.map((carType, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <img
              src={`@/public/carTypes/${carType.image}`}
              alt={carType.name}
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-2"
            />
            <p className="text-lg font-bold">{carType.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
