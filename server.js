const express = require("express");

const ShopListItems = require("./ShopItems.json");
const CouponCodes = require("./CouponCodes.json");
const firebase = require("firebase/app");

const app = express();

app.use(express.json());

const firebaseConfig = {
  apiKey: "AIzaSyCnDBnxSO-MiLlqqLNglRkdbaC63PQAnqk",
  authDomain: "react-eshop-68a9c.firebaseapp.com",
  databaseURL: "https://react-eshop-68a9c.firebaseio.com",
  projectId: "react-eshop-68a9c",
  storageBucket: "react-eshop-68a9c.appspot.com",
  messagingSenderId: "30817821077",
  appId: "1:30817821077:web:5b65b3cdbb286de3fe969c",
  measurementId: "G-ZKY8Y88ZXD"
};

const PORT = 5000 || process.env.PORT;

app.get("/ShopList", (req, res) => {
  res.json(ShopListItems);
});

app.get("/CouponCodesList", (req, res) => {
  res.json(CouponCodes);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
