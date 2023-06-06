import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./Cart";
import { useStateContext } from "./StateContext";

const Navbar = () => {
  const { showCart, totalQuantities, setShowCart } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <a href={`/`}>Shopping-Spree</a>
      </p>
      <button
        onClick={() => setShowCart(true)}
        type="button"
        className="cart-icon"
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
