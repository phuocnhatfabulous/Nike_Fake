import React from "react";
import ContactUsNav from "./ContactUsNav";

const ContactUs = () => {
  const gridOrders = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "PRODUCTS AND ORDERS",
    },
    {
      Id: 3,
      Title: "+84 912 345 678",
    },
    {
      Id: 4,
      Title: "9.00 - 18.00",
    },
    {
      Id: 5,
      Title: "Monday - Friday",
    },
  ];
  const gridApps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "NRC ve NTC",
    },
    {
      Id: 3,
      Title: "+84 912 345 678",
    },
    {
      Id: 4,
      Title: "9.00 - 18.00",
    },
    {
      Id: 5,
      Title: "Monday - Friday",
    },
  ];
  const gridMails = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/email.png",
    },
    {
      Id: 2,
      Title: "PRODUCTS AND ORDERS",
    },
    {
      Id: 3,
      Title: "Email us",
    },
    {
      Id: 4,
      Title: "within one business day",
    },
    {
      Id: 5,
      Title: "let's get back to you",
    },
  ];
  const gridCorps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/link.png",
    },
    {
      Id: 2,
      Title: "COMPANY INFORMATION AND QUESTIONS",
    },
    {
      Id: 3,
      Title: "Please have a look at our Corporate Communication Options",
    },
  ];
  const gridMarket = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/store.png",
    },
    {
      Id: 2,
      Title: "STORE LOCATOR",
    },
    {
      Id: 3,
      Title: "Find Nike retail stores near you",
    },
  ];

  return (
    <div className="border flex flex-col p-6 mt-4 w-full h-full md:p-16">
      <span className="text-3xl text-left">CONTACT US</span>
      <hr className="my-4" />
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-6">
        <ContactUsNav
          gridOrders={gridOrders}
          gridApps={gridApps}
          gridMails={gridMails}
          gridCorps={gridCorps}
          gridMarket={gridMarket}
        />
      </div>
    </div>
  );
};

export default ContactUs;
