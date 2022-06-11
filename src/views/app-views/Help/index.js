import React, { useEffect } from "react";
import ContactUs from "./Help-Components/ContactUs";
import HelpContainer from "./Help-Components/HelpContainer";
import Search from "./Help-Components/Search";

const Help = () => {
  useEffect(() => {
    document.title = "Help. Nike";
  }, []);
  return (
    <div className="flex flex-col text-center items-center justify-center mt-8">
      <span className="text-3xl">GET HELP</span>
      <Search />
      <HelpContainer />
      <ContactUs />
    </div>
  );
};

export default Help;
