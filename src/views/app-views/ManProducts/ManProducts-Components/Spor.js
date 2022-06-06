import React from "react";

const Spor = () => {
  return (
    <div className="p-2 flex flex-col">
      <span className="font-bold">Sport</span>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Günlük Giyim</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Running</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Football</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Training and Gym</label>
      </div>
    </div>
  );
};

export default Spor;
