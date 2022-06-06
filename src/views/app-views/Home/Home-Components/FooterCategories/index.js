import React from "react";
import "./FooterCategories.scss";

const FooterCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mt-20 text-center">
      <div className="col-span-1">
        <span className='font-bold'>Icons</span>
        <ul className="footer-categories">
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span className='font-bold'>Shoes</span>
        <ul className="footer-categories">
          <li>All shoes</li>
          <li>Custom shoes</li>
          <li>Jordan shoes</li>
          <li>Running shoes</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span className='font-bold'>Clothing</span>
        <ul className="footer-categories">
          <li>All clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Jackets</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span className='font-bold'>Kids'</span>
        <ul className="footer-categories">
          <li>Infant & Toddler Shoes</li>
          <li>Kids' Shoes</li>
          <li>Kids' Jordan Shoes</li>
          <li>Kids' Basketball Shoes</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCategories;
