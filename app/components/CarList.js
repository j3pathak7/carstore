import React from "react";
import CarCard from "./CarCard";
import ReactPaginate from "react-paginate";

const CarList = ({ carList, pageNumber, carsPerPage, changePage }) => {
  const pageCount = Math.ceil(carList.length / carsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-cyan-800">
        {carList
          .slice(pageNumber * carsPerPage, (pageNumber + 1) * carsPerPage)
          .map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
      </div>
      <div className="m-8">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
};

export default CarList;
