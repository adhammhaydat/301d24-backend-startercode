"use strict";
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const {
  home,
  getFavoriteCoffee,
  createItemController,
  updateItemController,
  deleteItemController,
  retreiveItemsController,
} = require("./controllers/coffee.controller");

mongoose.connect(
  "mongodb://adhammhaydat:12345@cluster0-shard-00-00.qi4a6.mongodb.net:27017,cluster0-shard-00-01.qi4a6.mongodb.net:27017,cluster0-shard-00-02.qi4a6.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ipru7s-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", home);
app.get("/fav-list", getFavoriteCoffee);
app.get("/retreive", retreiveItemsController);
app.post("/create", createItemController);
app.put("/update/:id", updateItemController);
app.delete("/delete/:id", deleteItemController);

app.listen(port, () => {
  console.log("listening to port 8000");
});
