import React from "react";
import "./KidsAd.scss";

const KidsAd = () => {
  return (
    <div className="mb-20">
      <div className="head-text ">
        <span className="text-2xl">Kidnapping</span>
        <div className="image-wrapper mt-4 mb-4 ">
          <img
            className="hidden lg:block md:block"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1824,c_limit/cfc94562-b61c-4c31-8601-f721d8bb75a7/resmi-nike-sitesi.jpg"
            alt="Kids Ad Maintain"
          />
          <img
            className="lg:hidden md:hidden block"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_437,c_limit/510869e9-a81c-481c-9ac2-05d25a7c3e50/resmi-nike-sitesi.jpg"
            alt="Kids Ad"
          />
        </div>
        <div className="flex flex-col text-center">
          Magical Air
          <span className="text-kids-ad-head-text">
            AIR MAX MOTIF FOR KIDS
          </span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black rounded-full px-10 py-1.5 text-white text-opacity-80 hover:bg-gray-400">
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsAd;
