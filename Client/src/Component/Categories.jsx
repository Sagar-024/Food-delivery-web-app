
import React from "react";

const Categories = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center gap-3 ">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded-2xl shadow-md"
      />
      
    </div>
  );
};

export default Categories;
