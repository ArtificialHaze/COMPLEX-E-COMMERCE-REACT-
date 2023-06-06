import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "./StateContext";
import { runFireWorks } from "./util";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          If you've any questions please Email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <a href="/">
          <button type="button" width="300px" className="btn">
            Continue shopping
          </button>
        </a>
      </div>
    </div>
  );
};

export default Success;
