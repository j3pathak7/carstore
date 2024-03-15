// useSortByPrice.js

import { useState } from "react";

const useSortByPrice = (initialList) => {
  const [sortedList, setSortedList] = useState(initialList);
  const [sortedByPrice, setSortedByPrice] = useState(false);

  const sortByPrice = () => {
    const sortedCars = [...sortedList].sort((a, b) =>
      sortedByPrice ? a.price - b.price : b.price - a.price
    );
    setSortedList(sortedCars);
    setSortedByPrice(!sortedByPrice);
  };

  return { sortedList, sortByPrice };
};

export default useSortByPrice;
