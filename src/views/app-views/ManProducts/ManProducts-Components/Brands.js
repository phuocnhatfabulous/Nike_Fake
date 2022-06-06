import React from "react";

const Brands = () => {
  return (
    <div className="p-2">
      <span className="font-bold">Brand</span>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Nike Sportswear</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Jordan</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Nike By You</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">NikeLab</label>
      </div>
    </div>
  );
};

export default Brands;
