import React, { useState, useEffect } from "react";
import Navbar from "./Elements/Navbar";
import ShopItem from "./Elements/ShopItem";
import "../styles/componentStyles.css";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    const getShopItems = async () => {
      let listItems = await fetch("/ShopList");
      let data = await listItems.json();
      setShopList(data);
    };
    getShopItems();
  }, []);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <ul>
            <div className="ShopContainer">
              {shopList.map((item) => (
                <ShopItem item={item} key={item.id} />
              ))}
            </div>
          </ul>
          <Route path="/" component={ShopItem} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
