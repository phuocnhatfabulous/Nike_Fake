import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites | Nike Clone";
  }, []);
  return (
    <div className="mt-4">
      <h1 className="text-xl">Favorites</h1>
      <div className="flex text-center justify-center mt-10 text-xl">
        Items added to favorites will be saved here.
      </div>
    </div>
  );
};

export default Favorites;
