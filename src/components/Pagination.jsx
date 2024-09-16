"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function CountryPagination() {
  const [currentPage, setCurrentPage] = useState(1);

 
  const onPageChange = (page) => {
    setCurrentPage(page);
    console.log(`Current Page: ${page}`);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center mb-4 mt-4">
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
        renderButton={({ page, isActive, onClick }) => (
          <button
            key={page}
            onClick={onClick}
            className={`px-3 py-1 mx-1 rounded-md transition-colors duration-300 ${
              isActive
                ? "bg-[rgba(255,255,255,0.4)] text-black"
                : "bg-transparent text-gray-500 hover:text-black"
            }`}
          >
            {page}
          </button>
        )}
      />
    </div>
  );
}
