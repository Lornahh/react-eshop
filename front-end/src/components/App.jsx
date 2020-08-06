import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ShopItem from "./ShopItem";
import "../styles/componentStyles.css";

const App = () => {
  const [shopList, setShopList] = useState([]);
  const GetShopItems = async () => {
    let ListItems = await fetch("/ShopList");
    let data = await ListItems.json();
    setShopList(data);
  };
  useEffect(() => {
    GetShopItems();
  });

  return (
    <div className="container">
      <Navbar />
      <ul>
        <div className="ShopContainer">
          {shopList.map((item) => (
            <ShopItem item={item} key={item.id} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default App;
