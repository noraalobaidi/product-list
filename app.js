const express = require("express");
const products = require("./data");
const app = express();
app.use(express.json());
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.listen(8000);
