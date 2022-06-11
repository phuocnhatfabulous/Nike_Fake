import React from "react";
import "../Jordan.scss";
const Main = () => {
  return (
    <div className="jordan">
      <img
        className="mb-10"
        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/b376f61d-a38e-4b17-a9d0-c7d200192e1d/jordan-markas%C4%B1.jpg"
        alt="Jordan"
      />
      <div className="flex flex-col text-5xl font-extrabold">
        <span className="font-bold text-base">This is Paris</span>
        <span>JORDAN X</span>
        <span>PARIS-SAINT GERMAIN</span>
        <span>COLLECTION</span>
      </div>

      <span className="jordan-desc">
        Jordan and Paris Saint-Germain, a new Color group and inspiration from the 1990s
        The area takes its collaborations to the next level with a striking motif.
      </span>
      <button className="jordan-button">Review</button>
    </div>
  );
};

export default Main;
