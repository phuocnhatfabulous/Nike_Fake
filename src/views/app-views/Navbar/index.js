import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Navbar-Components/Menu";
import "./navbar.scss";

const Navbar = () => {
  const menProducts = [
    {
      Id: 1,
      Name: "New & Featured",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "New Releases",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "SNKRS Launch Calendar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "Member Access",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Air Force 1",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "Summer Essentials",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Member Essentials",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Sale",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Shoes",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Newest Sneakers",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "All Shoes",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Lifestyle",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Running",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Basketball",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Football",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Gym and Trainning",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Skateboarding",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Tennis",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Sandals and Slides",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "All Sale Shoes",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Clothing",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "All Clothing",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Tops and T-shirts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Jerseys and Kits",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Hoodies and Sweatshirts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Jackets and Gilets",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Pans and Leggings",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Tracksuits",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Compression and Base Layer",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Shorts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3009,
          Name: "Caps",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3010,
          Name: "Socks",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "Bags and Backpacks",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3012,
          Name: "Accessories and Equipment",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3013,
          Name: "All Sale Clothing",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Shop By Sport",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Running",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Football",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Yoga",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Tennis",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Goft",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Icons",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Nike Sportswear",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "NikeLab",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Jordan",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Nike SB",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "ACG",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Nike Pro",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const womanProducts = [
    {
      Id: 1,
      Name: "New & Featured",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "New Releases",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "SNKRS Launch Calendar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "Member Access",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Air Force 1",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "Summer Essentials",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Member Essentials",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Bra and Legging Duos",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1007,
          Name: "Last Sizes Availabel",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1008,
          Name: "Sale",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Shoes",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Newest Sneakers",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "All Shoes",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Lifestyle",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Running",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Basketball",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Football",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Gym and Trainning",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Skateboarding",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Tennis",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Sandals and Slides",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "All Sale Shoes",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Clothing",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "All Clothing",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Tops and T-shirts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Jerseys and Kits",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Hoodies and Sweatshirts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Jackets and Gilets",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Pans and Leggings",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Tracksuits",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Compression and Base Layer",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Shorts",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3009,
          Name: "Caps",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3010,
          Name: "Socks",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "Bags and Backpacks",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3012,
          Name: "Accessories and Equipment",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3013,
          Name: "Modest Wear",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3014,
          Name: "Plus size",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3015,
          Name: "All Sale Clothing",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3016,
          Name: "All Sale Clothing",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Shop By Sport",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Running",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Football",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Yoga",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Tennis",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Goft",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Icons",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Nike Sportswear",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "NikeLab",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Jordan",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Nike SB",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "ACG",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Nike Pro",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const kidProducts = [
    {
      Id: 1,
      Name: "New & Featured",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Member Access",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "Air Force 1",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "Summer Essentials",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Bags and Backpacks",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "Jordan",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Last Sizes Available",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Sale",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Boys' Shoes",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Older Kids (3-6.5)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Younger Kids (10-2.5)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Baby and Toddler (1.5-9.5)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Lifestyle",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Running",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Football",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Sandals and Slides",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "All Sale Shoes",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Girls' Shoes",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Older Kids (3-6.5)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Younger Kids (10-2.5)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Baby and Toddler (1.5-9.5)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Lifestyle",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Running",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Jordan",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Badminton",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Sandals and Slides",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "All Sale Shoes",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Shop By Sport",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Running",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Football",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Yoga",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Tennis",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Goft",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Accessories and Equipment",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Bags and Backpacks",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "Earrings",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Necklace",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Bracelet",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "Brooches",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Rings",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Cufflinks",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const saleProducts = [
    {
      Id: 1,
      Name: "Featured",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Nike By You New Releases",
          Parent: 1,
          Children: [],
        }
      ],
    },
    {
      Id: 2,
      Name: "Nike By You",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Men",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Women",
          Parent: 2,
          Children: [],
        }
      ],
    },
    {
      Id: 3,
      Name: "By Sport",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Lifestyle",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Running",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Basketball",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Football",
          Parent: 3,
          Children: [],
        }
      ],
    },
    {
      Id: 4,
      Name: "Icons",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Air Max",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Air Force 1",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Free",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Flyknit",
          Parent: 4,
          Children: [],
        }
      ],
    },
    {
      Id: 5,
      Name: "Spora Göre İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Koşu",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "Spor Salonu ve Antrenman",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Yoga",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Futbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "Basketbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Tenis",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5006,
          Name: "Golf",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];

  return (
    <nav className="flex justify-between items-center">
      <div className="Logo hover:opacity-50 cursor-pointer">
        <Link to="/home">
          <svg
            class="pre-logo-svg"
            height="60px"
            width="60px"
            fill="#111"
            viewBox="0 0 69 32"
          >
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa-solid fa-x close hidden"></i>
          </label>
          <Link to="/man">
            <li>
              Men
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={menProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/man">
            <li>
              Women
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={womanProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/man">
            <li>
              Kids
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={kidProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/man">
            <li>
              Customise
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={saleProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/man">
            <li>
              Sale
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={menProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/man">
            <li>
              SNKRS
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={menProducts} />
                </div>
              </div>
            </li>
          </Link>
        </ul>
        <div className="absolute right-28 hidden lg:block">
          <i className="fa-solid fa-magnifying-glass absolute top-1.5 left-2 opacity-50 text-lg"></i>
          <input
            placeholder="Search"
            className="bg-[#f0efef] p-2 rounded-full w-40 pl-8 hover:bg-[#ebe9e9]"
            type="text"
          />
        </div>
      </div>
      <div className="mr-5 items-center hidden lg:flex">
        <div className="button-right">
          <Link to="/favorites">
            <svg
              className=""
              width="24px"
              height="24px"
              fill="#111"
              viewBox="0 0 24 24"
            >
              <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
            </svg>
          </Link>
        </div>
        <Link to="/cart">
          <div className="button-right">
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
              <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
              <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
