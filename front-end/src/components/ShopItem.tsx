import React from "react";
import "../styles/componentStyles.css";

type ShopProps = {
  name: string;
  id: number;
  price: number;
  image: string;
};
const ListItem = ({ item }: { item: ShopProps }) => {
  let newItemPrice: number = Math.trunc(item.price);
  return (
    <div className="ShopItem">
      <h2>
        The price for {item.name} is {item.price}$ and with tax {newItemPrice}$
      </h2>
      <img src={item.image} alt="crud" />
      <button className="addToCartButton">Add to cart</button>
    </div>
  );
};

export default ListItem;
