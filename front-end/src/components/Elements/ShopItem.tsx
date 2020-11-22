import React, { useEffect, useState } from "react";
import "../../styles/componentStyles.css";

interface Shop {
  name: string;
  id: number;
  price: number;
  image: string;
}

const ShopItem = ({ item }: { item: Shop }) => {
  const [cartCount, setCartCount] = useState(0);
  console.log(item);
  let newItemPrice: string = (item.price * 1.1).toFixed(2);

  useEffect(() => {});
  return (
    <div className="ShopItem">
      <h2 className="shopTitle">
        The price for {item.name} is ${item.price} and with tax, ${newItemPrice}
      </h2>
      <img src={item.image} alt="crud" className="shopItemImage" />
      <div className="addRemoveButtons">
        <button
          className="addToCartButton"
          onClick={() => {
            setCartCount(cartCount + 1);
          }}
        >
          Add to cart
        </button>

        <button
          className="removeFromCartButton"
          onClick={() => {
            setCartCount((count) => Math.max(count - 1, 0));
          }}
        >
          Remove from cart
        </button>
      </div>
      <h3 className="cartAmount"> Amount in cart: {cartCount}</h3>

      {/* Send the code over to the Cart component so the cart count can be used without a DB for now! */}
    </div>
  );
};

export default ShopItem;
