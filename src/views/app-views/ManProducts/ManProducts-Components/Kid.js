import React from "react";

const Kid = () => {
  return (
    <div className="p-2">
      <span className='font-bold'>Material</span>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Canvas</label>
      </div>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Leather</label>
      </div>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Synthetics</label>
      </div>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Sustainable Material</label>
      </div>
    </div>
  );
};

export default Kid;
