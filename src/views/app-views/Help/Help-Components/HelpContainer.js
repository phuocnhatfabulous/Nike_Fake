import React from "react";
import GridHelpNav from "./GridHelpNav";
import HelpContainerHeader from "./HelpContainerHeader";

const HelpContainer = () => {
  const gridCargo = [
    {
      Id: 1,
      Title: "DISPATCH & DELIVERY",
    },
    {
      Id: 2,
      Title: "How do I get free delivery on Nike orders?",
    },
    {
      Id: 3,
      Title: "What are Nike's delivery options?",
    },
    {
      Id: 4,
      Title: "Can my Nike order be dispatched internationally?",
    },
  ];
  const gridRefunds = [
    {
      Id: 1,
      Title: "RETURNS",
    },
    {
      Id: 2,
      Title: "How do I return my Nike order?",
    },
    {
      Id: 3,
      Title: "What is Nike's returns policy?",
    },
    {
      Id: 4,
      Title: "Where is my refund?",
    },
  ];
  const gridAccounts = [
    {
      Id: 1,
      Title: "NIKE MEMBERSHIP",
    },
    {
      Id: 2,
      Title: "What is Nike Membership?",
    },
    {
      Id: 3,
      Title: "How do I become a Nike Member?",
    },
    {
      Id: 4,
      Title:
        "How do I get the most out of NRC and NTC?",
    },
  ];
  const gridOrders = [
    {
      Id: 1,
      Title: "ORDERS",
    },
    {
      Id: 2,
      Title: "Where is my Nike order?",
    },
    {
      Id: 3,
      Title: "Can I change or cancel my Nike order?",
    },
    {
      Id: 4,
      Title: "What payment options can I use on Nike orders?",
    },
  ];
  const gridProducts = [
    {
      Id: 1,
      Title: "PRODUCT INFO",
    },
    {
      Id: 2,
      Title: "How do I get Nike’s newest sneaker releases?",
    },
    {
      Id: 3,
      Title: "How do I find the right size and fit?",
    },
    {
      Id: 4,
      Title: "What is Nike By You's personalisation policy?",
    },
    {
      Id: 5,
      Title: "Do Nike shoes have a warranty?",
    },
  ];
  const gridCorporation = [
    {
      Id: 1,
      Title: "CORPORATE",
    },
    {
      Id: 2,
      Title: "Where can I get more info about Nike, Inc.?",
    },
    {
      Id: 3,
      Title: "Where is the Nike store closest to me?",
    },
  ];
  return (
    <div className="border p-6 mt-4 w-full h-full md:p-16">
      <HelpContainerHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GridHelpNav
          gridCargo={gridCargo}
          gridRefunds={gridRefunds}
          gridAccounts={gridAccounts}
          gridOrders={gridOrders}
          gridProducts={gridProducts}
          gridCorporation={gridCorporation}
        />
      </div>
    </div>
  );
};

export default HelpContainer;
