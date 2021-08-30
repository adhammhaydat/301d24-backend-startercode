"use strict";
const axios = require("axios");
const { coffeeModel } = require("../models/coffee.model");

// Endpoint for testing
const home = (req, res) => {
  // provide your logic here
  res.send("hello world");
};
// Call the coffee api here and return the results
const retreiveItemsController = (req, res) => {
  // provide your logic here
  axios.get(process.env.URL_API).then((rusult) => {
    res.send(rusult.data);
  });
};
// Get favorite coffee from MongoDB
const getFavoriteCoffee = (req, res) => {
  // provide your logic here
  coffeeModel.find({}, (err, ele) => {
    if (err) {
      res.send(err);
    } else {
      res.send(ele);
    }
  });
};
// Create new fav coffee endpoint
const createItemController = (req, res) => {
  // provide logic here
  const { strDrink, strDrinkThumb, idDrink } = req.body;

  const newModel = new coffeeModel({
    strDrink: strDrink,
    strDrinkThumb: strDrinkThumb,
    idDrink: idDrink,
  });
  newModel.save();
  res.send(newModel);
};

// update coffee from MongoDB
const updateItemController = (req, res) => {
  // provide logic here
  let id = req.params.id;
  const { strDrink, strDrinkThumb, idDrink } = req.body;
  coffeeModel.findOne({_id:id},(err,result)=>{
      result.strDrink=strDrink;
      result.strDrinkThumb=strDrinkThumb;
      result.idDrink=idDrink;
      result.save();
      res.send(result)
  })
};

// delete coffee from MongoDB
const deleteItemController = (req, res) => {
  // provide your logic here
  let id = req.params.id;
  coffeeModel.findByIdAndDelete(id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  home,
  getFavoriteCoffee,
  createItemController,
  updateItemController,
  deleteItemController,
  retreiveItemsController,
};
