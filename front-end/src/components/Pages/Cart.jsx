import React, { useState, useEffect } from "react";

function Cart() {
  const [couponList, setCouponList] = useState([]);
  const [couponCode, setCouponCode] = useState([]);

  useEffect(() => {
    const getCouponItems = async () => {
      let couponListItems = await fetch("/CouponCodesList");
      let couponData = await couponListItems.json();
      setCouponList(couponData);
    };

    getCouponItems();
  }, []);

  const handleCouponSubmit = (e) => {
    e.preventDefault();

    if (couponList.find((c) => couponCode.toString.ignoreCase === c)) {
      alert("Yeah it works");
    }
  };

  return (
    <div className="cartContainer">
      <div>
        <h1 className="cartTitle">Welcome to your cart</h1>
      </div>
      <div className="couponInput">
        <form onSubmit={handleCouponSubmit}>
          <input
            type="text"
            placeholder="Input coupon code..."
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <input type="submit" value="Submit Code" />
        </form>
      </div>
    </div>
  );
}

export default Cart;
