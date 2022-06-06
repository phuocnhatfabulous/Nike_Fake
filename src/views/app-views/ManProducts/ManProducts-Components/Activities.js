import React from "react";

const Activities = () => {
  return (
    <div className="p-2">
      <span className="font-bold">Ideal for Activities</span>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Hot weather</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Rainy Weather</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Cold weather</label>
      </div>
    </div>
  );
};

export default Activities;
