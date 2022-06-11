import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";

const Cart = () => {
  useEffect(() => {
    document.title = "Basket | Nike Clone";
  }, []);
  return (
    <div className="container flex justify-around mt-2 ">
      <div className="flex flex-col gap-2">
        <span className="text-2xl">Basket</span>
        <span>There are no items in your cart.</span>
        <div className="mt-48">
          Want to view your favourites?{" "}
          <Link to="/register">
            <span className="underline opacity-70">Join Us</span>
          </Link>{" "}
          or {" "}
          <Link to="/login">
            <span className="underline opacity-70">Sign In</span>{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl">Summary</span>
        <span> Subtotal: $0,00</span>
        <span>Estimated Shipping and Processing Fee: $0.00</span>
        <hr />
        <span className="font-semibold">
          Total: <span>$0,00</span>
        </span>
        <hr />
        <div className="flex flex-col buttons-cart">
          <button disabled>Payment as a Guest User</button>
          <button disabled>Payment by Login</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
