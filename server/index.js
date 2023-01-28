const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

PORT = process.env.PORT;

url = process.env.CONNECTION.replace("<password>", process.env.PASSWORD);
mongoose.set("strictQuery", true);
mongoose.connect(url, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log("SERVER WORKING");
    });
  }
});

const Schema = mongoose.Schema;

let flowers = new Schema({
  image: { type: String, require: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
});

const Flowers = mongoose.model("flowers", flowers);

app.get("/", (req, res) => {
  res.send("Hello");
});

//post flowers

app.post("/flowers", (req, res) => {
  const flower = new Flowers({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
  });
  flower.save();
  res.send({ message: "flower added" });
});

//get flowers

app.get("/flowers", (req, res) => {
    Flowers.find({}, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//get by id

app.get("/flowers/:id", (req, res) => {
  const { id } = req.params;

  Flowers.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.send({ message: "not found" });
      }
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//delete

app.delete("/flowers/:id", (req, res) => {
  const { id } = req.params;

  Flowers.findByIdAndDelete(id, (err, doc) => {
    if (!err) {
      res.send({ message: "Flower deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});
