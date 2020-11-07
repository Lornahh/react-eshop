const express = require("express");

const ShopListItems = require("./ShopItems.json");

const app = express();
app.use(express.json());
const PORT = 5000 || process.env.PORT;

app.get("/ShopList", (req, res) => {
  res.json(ShopListItems);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
